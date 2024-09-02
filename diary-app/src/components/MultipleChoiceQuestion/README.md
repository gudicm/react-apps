# MultipleChoiceQuestion

This component is the equivalent of TextChoice in Study Builder, basically.

This component accepts props:

- stem: string
  - Text leading into the question. Appears first
- question: string - isRequired
  - The question itself
- answers: arrayOf(string) - isRequired
  - Array of answer options. Displayed pseudo buttons
- style: oneOf(["none", "disc", "circle", "square", "decimal"])
  - Applied as the list-style css property
- setValue: func - isRequired
  - How it modifies state, should be passed from the parent
- allowMultiple: bool
  - If allowMultiple is true, you can select multiple answers
- skippable: bool
  - If skippable is true, component initializes with a value of [null]
- note: string
  - If there is a note, it appears before the stem
- value: array
  - The state value selection of the question. This always needs to be an array, even if multiple is false. Just to remain consistent
