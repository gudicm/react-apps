# ValuePicker

This component is the equivalent of Value Picker in Study Builder.

This component accepts props:

- stem: string
  - Text leading into the question. Appears first
- question: string
  - The question text itself
- unit: string
  - A unit text or second part of a question that appears after the value picker
- placeholder: string
  - A placeholder text that appears when Value Picker is initially loaded
- value: string
  - The value of a Value Picker selection.
- setValue: func - isRequired
  - How it modifies state, should be passed from the parent. Sets the selected option into an array to conform the value_picker data type format
- options: arrayOf(string) - isRequired
  - Array of Value Picker options
- inline: bool
  - If inline is true, displays Value Picker inline with the question
