// Space Week Day 5: Goldilocks Zone
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-08

function goldilocksZone(mass) {
  const luminosity = mass ** 3.5;
  const start = 0.95 * Math.sqrt(luminosity);
  const end = 1.37 * Math.sqrt(luminosity);

  const result = [Number(start.toFixed(2)), Number(end.toFixed(2))];

  console.log(result);
  return result;
}

console.log(goldilocksZone(1));    // [0.95, 1.37]
console.log(goldilocksZone(0.5));  // [0.28, 0.41]
console.log(goldilocksZone(6));    // [21.85, 31.51]
console.log(goldilocksZone(3.7));  // [9.38, 13.52]
console.log(goldilocksZone(20));   // [179.69, 259.13]