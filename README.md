# CodeSanook.Bumblebee.TS
A browser test page object inspired by .NET Bumblebee

Classes and Interfaces that are ready for reviewing.

concrete classes
- HomeSpec.ts
- HomePage.ts
- ResultPage.ts

abstract classes
- Element.ts
- Block.ts
- WebBlock.ts ? which is not useful because I cannot encapsulate the "body" tag to
make it a object representing a HTML page.
I should not has parent because it is a root object
- TextField.ts
- Clickable.ts

The relationship is
- Element is the smallest item
- Block is the container of Elements
- Block is the container of other Blocks
- Block that does not have parent is "WebBlock"

interfaces
- IHasSession.ts
- IHasTag.ts
- IHasParent.ts
- ITextField.ts
- IHasText.ts
- IClickable.ts

Utility class
- Session.ts


### TODO
[ ] Add more interface and implementation of HTML Form inputs.
[ ] Reduce noise of async/await in the code.
[ ] Create a built-in website for demonstration integration test.