// Space Week Day 4: Landing Spot
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-07

function findLandingSpot(matrix) {
    let safestSpot = null;
    let lowestDanger = Infinity;

    const directions = [
        [-1, 0], // up
        [1, 0],  // down
        [0, -1], // left
        [0, 1]   // right
    ];

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            // Only consider landing spots
            if (matrix[row][col] !== 0) continue;

            let danger = 0;

            for (const [dr, dc] of directions) {
                const newRow = row + dr;
                const newCol = col + dc;

                // Ignore out-of-bounds neighbors
                if (
                    newRow >= 0 &&
                    newRow < matrix.length &&
                    newCol >= 0 &&
                    newCol < matrix[newRow].length
                ) {
                    danger += matrix[newRow][newCol];
                }
            }

            if (danger < lowestDanger) {
                lowestDanger = danger;
                safestSpot = [row, col];
            }
        }
    }

    return safestSpot;
}

// findLandingSpot([
//     [1, 0],
//     [2, 0]
// ]);