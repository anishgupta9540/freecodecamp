//https://www.freecodecamp.org/learn/daily-coding-challenge/11-07
//Counting Cards

function combinations(cards) {
  let result = 1;

  for (let i = 1; i <= cards; i++) {
    result = result * (52 - i + 1) / i;
  }

  return result;
}

// Test cases
console.log(combinations(52)); // 1
console.log(combinations(1));  // 52
console.log(combinations(2));  // 1326
console.log(combinations(5));  // 2598960
console.log(combinations(10)); // 15820024220
console.log(combinations(50)); // 1326
