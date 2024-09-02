# Modal

You will need to control the display of this with a state layer in the page

This component accepts props:

- title: string - isRequired
  - Title of the modal, shown first, bigger and bolder
- text: string - isRequired
  - Text of the modal, shown below title and above buttons
- forwardAction: func - isRequired
  - The forward/positive action of the modal. Function of button on the right
- forwardText: string - isRequired
  - The forward/positive text of the modal. Button on right
- backAction: func - isRequired
  - The backwards/negative action of the modal. Function of the button on the left
- backText: string - isRequired
  - The backwards/negative text of the modal. Button on left
- className: string
  - Optional className to be added to the modal
