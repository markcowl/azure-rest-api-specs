"""Reusable analyzer for searching patterns across Azure ARM TypeSpec specs.

Discovers ARM TypeSpec *services* in an azure-rest-api-specs checkout, resolves the
generated OpenAPI (Swagger) documents produced by each service, and runs a pluggable
scan over the latest API version of each service.

A "spec" is a directory tree with a tspconfig.yaml + .tsp files. It is an ARM spec if
the tspconfig extends the resource-manager linter ruleset, or lives under a
`resource-manager` directory. Multiple nested spec directories inside a single
`<RPNS>/<service>` directory are treated as ONE service (e.g. Network/Network,
Network/Vmss, Network/common -> service "Network").

Generated OpenAPI docs are identified by the `x-typespec-generated` extension in their
`info` section. Example JSON files (under an `examples/` directory) are ignored.
"""
import os, re, glob, json, collections

try:
    import yaml
except ImportError:
    raise SystemExit("pyyaml required: pip install pyyaml")

AUTOREST = "@azure-tools/typespec-autorest"


def norm(p):
    return os.path.normpath(p).replace("\\", "/")


def _subst(s, mapping):
    """Replace {token} using mapping; unknown tokens -> '*' (glob wildcard)."""
    return re.sub(r"\{([^}]+)\}", lambda m: mapping.get(m.group(1), "*"), s)


def is_arm_config(cfg_path, doc):
    lint = ((doc.get("linter") or {}).get("extends") or [])
    if any("resource-manager" in str(x) for x in lint):
        return True
    return "resource-manager" in norm(cfg_path)


def service_key(cfg_path, spec_root):
    """Group key: the <service> dir under <RPNS>, or the flat service/.Management dir."""
    rel = norm(cfg_path)[len(norm(spec_root)) + 1:]
    parts = rel.split("/")[:-1]  # drop tspconfig.yaml
    if "resource-manager" in parts:
        i = parts.index("resource-manager")
        end = min(i + 3, len(parts))  # short.. / resource-manager / RPNS / service
        key = parts[:end]
    else:
        key = parts[:2]  # short / serviceDir
    return "/".join(key)


def short_name(key):
    return key.split("/")[0]


def resolve_output_globs(cfg_path, doc):
    """Return glob patterns for this config's generated OpenAPI files."""
    proj = norm(os.path.dirname(cfg_path))
    emit = doc.get("emit") or []
    autorest = (doc.get("options") or {}).get(AUTOREST)
    if AUTOREST not in emit and not autorest:
        return []
    autorest = autorest or {}
    output_dir = norm(_subst(str(doc.get("output-dir", "{project-root}")),
                             {"project-root": proj}))
    base = norm(_subst(str(autorest.get("emitter-output-dir", "{project-root}")),
                       {"project-root": proj, "output-dir": output_dir}))
    arp = _subst(str(autorest.get("azure-resource-provider-folder", "resource-manager")),
                 {"project-root": proj, "output-dir": output_dir})
    of = _subst(str(autorest.get("output-file", "{version-status}/{version}/openapi.json")),
                {"project-root": proj, "output-dir": output_dir,
                 "emitter-output-dir": base, "azure-resource-provider-folder": arp,
                 "version-status": "*", "version": "*", "service-name": "*"})
    full = norm(os.path.join(base, of))  # os.path.join respects absolute 'of'
    return [full]


def load_json(path):
    with open(path, "r", encoding="utf-8-sig") as f:
        return json.load(f)


def is_generated(doc):
    return "x-typespec-generated" in (doc.get("info") or {})


def parse_version(v):
    m = re.match(r"(\d{4})-(\d{2})-(\d{2})", v)
    date = (int(m.group(1)), int(m.group(2)), int(m.group(3))) if m else (0, 0, 0)
    return (date, 0 if "preview" in v.lower() else 1, v)


def version_from_path(p):
    parts = norm(p).split("/")
    for i in range(len(parts) - 1, 0, -1):
        if parts[i - 1] in ("stable", "preview"):
            return parts[i]
    return None


def is_v2_key(key):
    return "resource-manager" in key.split("/")


def discover_services(spec_root):
    """Return {service_key: {"short":.., "dir":.., "configs":[..], "files":set()}}.

    v2 layout (resource-manager/<RPNS>/<Service>) takes precedence over the older
    flat `.Management` layout: if a flat service emits OpenAPI files that live inside
    an existing v2 service directory, those files (and the flat service) are folded
    into the v2 service and the flat service is dropped as superseded.
    """
    services = {}
    file_owner = collections.defaultdict(set)
    for cfg in glob.glob(os.path.join(spec_root, "**", "tspconfig.yaml"), recursive=True):
        try:
            doc = yaml.safe_load(open(cfg, encoding="utf-8")) or {}
        except Exception:
            continue
        if not is_arm_config(cfg, doc):
            continue
        key = service_key(cfg, spec_root)
        svc = services.setdefault(key, {
            "short": short_name(key), "dir": norm(spec_root) + "/" + key,
            "configs": [], "files": set()})
        svc["configs"].append(norm(cfg))
        for pat in resolve_output_globs(cfg, doc):
            for f in glob.glob(pat):
                nf = norm(f)
                if "/examples/" in nf or not nf.lower().endswith(".json"):
                    continue
                svc["files"].add(nf)
                file_owner[nf].add(key)

    # v2-precedence: fold flat (.Management) services whose files live inside a v2
    # service directory into that v2 service.
    v2_dirs = sorted((services[k]["dir"], k) for k in services if is_v2_key(k))
    superseded = {}
    for key in [k for k in services if not is_v2_key(k)]:
        flat = services[key]
        for f in list(flat["files"]):
            for vdir, vkey in v2_dirs:
                if f.startswith(vdir + "/"):
                    services[vkey]["files"].add(f)
                    services[vkey]["configs"].extend(flat["configs"])
                    file_owner[f].discard(key)
                    file_owner[f].add(vkey)
                    superseded.setdefault(key, vkey)
                    flat["files"].discard(f)
                    break
    for key in superseded:
        if not services[key]["files"]:
            del services[key]
    return services, file_owner, superseded


# ------- pluggable scans -------

def schema_names(doc):
    names = []
    if isinstance(doc.get("definitions"), dict):
        names += list(doc["definitions"].keys())
    comp = doc.get("components")
    if isinstance(comp, dict) and isinstance(comp.get("schemas"), dict):
        names += list(comp["schemas"].keys())
    return names


def scan_dotted_schemas(openapi_doc):
    """Return list of schema names containing a '.'."""
    return [n for n in schema_names(openapi_doc) if "." in n]


def file_identity(p):
    """Identity of a generated doc across versions: path with the stable|preview/<ver>
    segments removed, so the same doc across api-versions groups together."""
    parts = norm(p).split("/")
    for i in range(len(parts) - 1, 0, -1):
        if parts[i - 1] in ("stable", "preview"):
            return "/".join(parts[:i - 1] + parts[i + 1:])
    return norm(p)


def analyze(spec_root, scan=scan_dotted_schemas):
    """For each ARM service, determine the single newest api-version across all its
    generated OpenAPI docs, then run `scan` only on the docs present at that version."""
    services, file_owner, superseded = discover_services(spec_root)
    results = []
    doc_cache = {}
    for key, svc in services.items():
        gen = {}  # file -> version, generated docs only
        for f in svc["files"]:
            try:
                d = load_json(f)
            except Exception:
                continue
            doc_cache[f] = d
            if is_generated(d):
                gen[f] = version_from_path(f) or "0000-00-00"
        if not gen:
            continue
        latest = max(gen.values(), key=parse_version)
        affected, total, names = [], 0, []
        for f, v in gen.items():
            if v != latest:
                continue
            m = scan(doc_cache[f])
            if m:
                affected.append({"file": f, "version": v, "count": len(m)})
                total += len(m)
                names += m
        if total:
            results.append({
                "service": key, "short": svc["short"], "dir": svc["dir"],
                "num_configs": len(svc["configs"]), "latest": latest,
                "files": sorted(affected, key=lambda a: a["file"]),
                "count": total, "sample": sorted(set(names))[:6],
            })
    dupes = {f: sorted(o) for f, o in file_owner.items() if len(o) > 1}
    return results, services, dupes, superseded


if __name__ == "__main__":
    import argparse
    ap = argparse.ArgumentParser()
    ap.add_argument("spec_root")
    ap.add_argument("--out", default=None)
    a = ap.parse_args()
    results, services, dupes, superseded = analyze(a.spec_root)
    print(f"ARM services discovered: {len(services)}")
    print(f"Services matching scan: {len(results)}")
    print(f"Superseded flat(.Management) services folded into v2: {len(superseded)}")
    for k, v in superseded.items():
        print("  SUPERSEDED", k, "->", v)
    print(f"Files owned by >1 service (cross-service dupes): {len(dupes)}")
    for f, o in dupes.items():
        print("  DUPE", f.split('specification/')[-1], "->", o)
    for r in sorted(results, key=lambda r: -r["count"]):
        print(f"{r['short']:<22} {r['latest']:<22} count={r['count']:<4} "
              f"files={len(r['files'])} {r['service']}")
    if a.out:
        json.dump(results, open(a.out, "w", encoding="utf-8"), indent=2)
        print("wrote", a.out)
