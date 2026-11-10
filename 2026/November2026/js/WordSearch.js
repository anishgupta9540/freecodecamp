//https://www.freecodecamp.org/learn/daily-coding-challenge/11-09
//Word Search

function findWord(matrix, word) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  const directions = [
    [0, 1],   // Right
    [0, -1],  // Left
    [1, 0],   // Down
    [-1, 0]   // Up
  ];

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (matrix[r][c] !== word[0]) continue;

      for (const [dr, dc] of directions) {
        let i = 0;

        while (
          i < word.length &&
          r + dr * i >= 0 &&
          r + dr * i < rows &&
          c + dc * i >= 0 &&
          c + dc * i < cols &&
          matrix[r + dr * i][c + dc * i] === word[i]
        ) {
          i++;
        }

        if (i === word.length) {
          return [
            [r, c],
            [r + dr * (word.length - 1),
             c + dc * (word.length - 1)]
          ];
        }
      }
    }
  }
}

// Test 1
console.log(findWord(
  [["a", "c", "t"], ["t", "a", "t"], ["c", "t", "c"]],
  "cat"
));

// Test 2
console.log(findWord(
  [["d", "o", "g"], ["o", "g", "d"], ["d", "g", "o"]],
  "dog"
));

// Test 3
console.log(findWord(
  [["h", "i", "s", "h"], ["i", "s", "f", "s"],
   ["f", "s", "i", "i"], ["s", "h", "i", "f"]],
  "fish"
));

// Test 4
console.log(findWord(
  [["f", "x", "o", "x"], ["o", "x", "o", "f"],
   ["f", "o", "f", "x"], ["f", "x", "x", "o"]],
  "fox"
));

[ [ 0, 1 ], [ 2, 1 ] ]
[ [ 0, 0 ], [ 0, 2 ] ]
[ [ 3, 3 ], [ 0, 3 ] ]
[ [ 1, 3 ], [ 1, 1 ] ]