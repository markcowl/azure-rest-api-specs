namespace Sample.API.Support
{

    /// <summary>Argument completer implementation for SkuName.</summary>
    public partial struct SkuName : System.Management.Automation.IArgumentCompleter
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
            if (System.String.IsNullOrEmpty(wordToComplete) || "Basic".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Basic", "Basic", System.Management.Automation.CompletionResultType.ParameterValue, "Basic");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Standard".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Standard", "Standard", System.Management.Automation.CompletionResultType.ParameterValue, "Standard");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Premium".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Premium", "Premium", System.Management.Automation.CompletionResultType.ParameterValue, "Premium");
            }
        }
    }
}