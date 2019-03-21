namespace Sample.API.Support
{

    /// <summary>Argument completer implementation for DayOfWeek.</summary>
    public partial struct DayOfWeek : System.Management.Automation.IArgumentCompleter
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
            if (System.String.IsNullOrEmpty(wordToComplete) || "Monday".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Monday", "Monday", System.Management.Automation.CompletionResultType.ParameterValue, "Monday");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Tuesday".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Tuesday", "Tuesday", System.Management.Automation.CompletionResultType.ParameterValue, "Tuesday");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Wednesday".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Wednesday", "Wednesday", System.Management.Automation.CompletionResultType.ParameterValue, "Wednesday");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Thursday".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Thursday", "Thursday", System.Management.Automation.CompletionResultType.ParameterValue, "Thursday");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Friday".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Friday", "Friday", System.Management.Automation.CompletionResultType.ParameterValue, "Friday");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Saturday".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Saturday", "Saturday", System.Management.Automation.CompletionResultType.ParameterValue, "Saturday");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Sunday".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Sunday", "Sunday", System.Management.Automation.CompletionResultType.ParameterValue, "Sunday");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Everyday".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Everyday", "Everyday", System.Management.Automation.CompletionResultType.ParameterValue, "Everyday");
            }
            if (System.String.IsNullOrEmpty(wordToComplete) || "Weekend".StartsWith(wordToComplete, System.StringComparison.InvariantCultureIgnoreCase))
            {
                yield return new System.Management.Automation.CompletionResult("Weekend", "Weekend", System.Management.Automation.CompletionResultType.ParameterValue, "Weekend");
            }
        }
    }
}