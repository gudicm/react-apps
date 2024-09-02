# NumericScale

![example image](./images/example.png 'Example Image')

Above is an example NumericScale component. Similar to Validated-Instruments NRS

This component accepts props:

- minNumber: number - isRequired
  - Can be negative. Starts on the left side
- maxNumber: number - isRequired
  - Can be negative. Is where the numbers end on the right
- stem: string
  - Shown in image, appears above question
- question: string - isRequired
  - The question itself
- setValue: func - isRequired
  - How it updates the state value, passed from parent
- anchors: objectOf(string)
  - Shows the anchors below the numbers. See example below
- value: number
  - The value of the selected number. Starts as nothing, should reference state value
- showAnchors: bool
  - Toggles whether or not anchors are displayed
- showAnchorArrows: bool
  - Toggles whether or not anchor arrows are displayed
- anchorsAbove: bool
  - Toggles the position of the anchors above of below the selection boxes
- increment: number
  - How many numbers between each number between min and max. Defaults to 1.
- descendingNumbers: bool
  - Toggles counting down instead of up
- showFirstDecimal: bool
  - Shows "0.1" instead of ".1"

Example anchors from image:

```
{
  1: ["▲", "Totally agree"],
  4: ["▲", "Neither agree nor disagree"],
  7: ["▲", "Totally disagree"]
}
```

- Object
- Number based keys
  - Keys represent the index to appear under, where minNumber is left, and maxNumber is right
- Key values are arrays of strings
- symbol : string.
  - Ex: You have value a 100 and you have a symbol '%'. You can see in the box '100%'
