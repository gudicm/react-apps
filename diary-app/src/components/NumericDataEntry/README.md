# NumericDataEntry

This component is similar to NDE from the prior validated instruments library. It is generally a question followed by an input box that allows only numbers.

This component accepts props:

- title: string
  - Shows above the question in bold
- stem: string
  - Used to lead into the question
- question: string
  - The question text itself
- minInput: number
  - The smallest acceptable number
  - Defaults to 0
- maxInput: number
  - The largest acceptable number
  - Defaults to Infinity
- value: string
  - This is a string because of how html works, but it refers to a state value held by this component
- setValue: func - isRequired
  - Sets the state value
- label: string
  - Shows a label next to the input
- allowDecimal: bool
  - Allows the use of decimals
- allowNegative: bool
  - Allows the use of negative numbers
- numberOfDecimalPlaces: number
  - Number of decimal places (numbers after zero) to allow
- showErrorMessage: bool
  - Used to toggle the display of an optional error message
- errorMessageText: string
  - Error message to be displayed if 'showErrorMessage' is true
