# DateSelector

This component accepts props:

- maxDate: string, number, or Date
  - The maximum selectable date
- minDate: string, number, or Date
  - The minimum selectable date
- value: string, number, or Date - isRequired
  - The currently selected value
- updateValue: function - isRequired
  - What to do when a user selects a new value
- placeholderText: string
  - Displayed inside the input
- title: string
  - Topmost text
- stem: string
  - Used to _lead into_ a question. Shows between Title and Question
- question: string
  - The question itself
- valueType: string
  - A custom modification to change date format. Accepts "default" (mm/dd/yyyy), "yearOnly" (yyyy), or "monthYear" (mm/yyyy)
