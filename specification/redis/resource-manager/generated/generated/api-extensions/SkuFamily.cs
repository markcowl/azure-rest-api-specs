namespace Sample.API.Support
{

    /// <summary>Argument completer implementation for SkuFamily.</summary>
    public partial struct SkuFamily : System.Management.Automation.IArgumentCompleter
    {

        /// <summary>
        /// Implementations of this function are called by PowerShell to complete arguments.
        /// </summary>
        /// <param name="commandName">The name of the command that needs argument completion.</param>
        /// <param name="parameterName">The name of the parameter that needs argument completion.</param>
        /// <param name="wordToComplete">The (possibly empty) word being completed.</param>
        /// <param name="commandAst">The command ast in case it is needed for completion.</param>
        /// <param name="fakeBoundParameters">This parameter is similar to $PSBoundParameters, except that sometimes PowerShell cannot
        /// or will not attempt to evaluate an argument, in which case you may need to use commandAst.</param>
        /// <returns>
        /// A collection of completion results, most like with ResultType set to ParameterValue.
        /// </returns>
        public System.Collections.Generic.IEnumerable<System.Management.Automation.CompletionResult> CompleteArgument(System.String commandName, System.String parameterName, System.String wordToComplete, System.Management.Automation.Language.CommandAst commandAst, System.Collections.IDictionary fakeBoundParameters)
        {
            if (System.String.IsNullOrEmpty(wordToComplete) || "C".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("C", "C", System.Management.Automation.CompletionResultType.ParameterValue, "C");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "P".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("P", "P", System.Management.Automation.CompletionResultType.ParameterValue, "P");
            }
        }
    }
}