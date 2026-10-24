//https://www.freecodecamp.org/learn/daily-coding-challenge/10-24
//Hidden Treasure

function dive(map, coordinates) {
  const [row, col] = coordinates;

  if (map[row][col] === "-") {
    return "Empty";
  }

  let unfound = 0;

  for (let r = 0; r < map.length; r++) {
    for (let c = 0; c < map[r].length; c++) {
      if (map[r][c] === "O") {
        unfound++;
      }
    }
  }

  if (map[row][col] === "O" && unfound === 1) {
    return "Recovered";
  }

  return "Found";
}

// Test cases
console.log(dive([["-", "X"], ["-", "X"], ["-", "O"]], [2, 1]));
// Recovered

console.log(dive([["-", "X"], ["-", "X"], ["-", "O"]], [2, 0]));
// Empty

console.log(dive([["-", "X"], ["-", "O"], ["-", "O"]], [1, 1]));
// Found

console.log(dive([["-", "-", "-"], ["X", "O", "X"], ["-", "-", "-"]], [1, 2]));
// Found

console.log(dive([["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [2, 0]));
// Recovered

console.log(dive([["-", "-", "-"], ["-", "-", "-"], ["O", "X", "X"]], [1, 2]));
// Empty