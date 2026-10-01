```javascript
import { getLongestWord } from "./getLongestWord";

describe("getLongestWord", () => {
  test("returns the longest word", () => {
    expect(getLongestWord("coding is fun")).toBe("coding");
  });

  test("ignores periods when determining word length", () => {
    expect(
      getLongestWord("Coding challenges are fun and educational.")
    ).toBe("educational");
  });

  test("returns the first word when multiple words have the same length", () => {
    expect(
      getLongestWord("This sentence has multiple long words.")
    ).toBe("sentence");
  });

  test("returns the first longest word when there is a tie", () => {
    expect(getLongestWord("apple mango")).toBe("apple");
  });

  test("handles a single word", () => {
    expect(getLongestWord("hello")).toBe("hello");
  });
});
```
