import { mergeConfig } from "vitest/config";
import { baseConfig } from "../vitest.base.config.ts";

export default mergeConfig(baseConfig, {
  test: {
    testTimeout: 90_000,
  },
});
