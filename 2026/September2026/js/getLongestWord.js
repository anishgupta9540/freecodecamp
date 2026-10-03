// https://www.freecodecamp.org/learn/daily-coding-challenge/09-29

function getLongestWord(sentence) {
  const words = sentence.split(" ");
  let longest = "";

  for (const word of words) {
    const cleanWord = word.replace(/\./g, "");

    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
}

getLongestWord("coding is fun"); // "coding"
getLongestWord("Coding challenges are fun and educational."); // "educational"
getLongestWord("This sentence has multiple long words."); // "sentence"