//https://www.freecodecamp.org/learn/daily-coding-challenge/11-05
//Matrix Builder

function buildMatrix(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

// Test cases
console.log(buildMatrix(2, 3));
// [[0, 0, 0], [0, 0, 0]]

console.log(buildMatrix(3, 2));
// [[0, 0], [0, 0], [0, 0]]

console.log(buildMatrix(4, 3));
// [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]]

console.log(buildMatrix(9, 1));
// [[0], [0], [0], [0], [0], [0], [0], [0], [0]]