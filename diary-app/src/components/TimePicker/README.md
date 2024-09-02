# TimePicker

Time Picker is the component that uses HTML input type time.

This component accepts props:

- stem: string
  - Text leading into the question. Appears first
- question: string
  - The question text itself
- value: string
  - The value of a Time Picker selection. It should be always string and in the following format: `HH:mm`
- setValue: func - isRequired
  - How it modifies state, should be passed from the parent. Sets the selected option to the medableResult
