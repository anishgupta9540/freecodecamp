// Battle of Words
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-12

function battle(myTeam, opposingTeam) {
  function wordValue(word) {
    return [...word].reduce((sum, char) => {
      const value = char.toLowerCase().charCodeAt(0) - 96;
      return sum + (char === char.toUpperCase() ? value * 2 : value);
    }, 0);
  }

  const myWords = myTeam.split(" ");
  const opposingWords = opposingTeam.split(" ");
  z
  let wins = 0;

  for (let i = 0; i < myWords.length; i++) {
    const myValue = wordValue(myWords[i]);
    const opposingValue = wordValue(opposingWords[i]);

    if (myValue > opposingValue) {
      wins++;
    } else if (myValue < opposingValue) {
      wins--;
    }
  }

  if (wins > 0) return "We win";
  if (wins < 0) return "We lose";
  return "Draw";
}

console.log(battle("hello world", "hello word"));
// We win
console.log(battle("Hello world", "hello world"));
// We wi
console.log(battle("lorem ipsum", "kitty ipsum"));
// We lose
console.log(battle("hello world", "world hello"));
// Draw
console.log(battle("git checkout", "git switch"));
// We win
console.log(battle("Cheeseburger with fries", "Cheeseburger with Fries"));
// We lose
console.log(battle("We must never surrender", "Our team must win"));
// Draw