// Space Week Day 2: Exoplanet Search
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-05

function hasExoplanet(readings) {
    // Convert each character to its luminosity value
    const values = [...readings].map(char => {
        if (char >= '0' && char <= '9') {
            return Number(char);
        }

        return char.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
    });

    // Calculate the average luminosity
    const average = values.reduce((sum, value) => sum + value, 0) / values.length;

    // Check if any reading is <= 80% of the average
    return values.some(value => value <= average * 0.8);
}

console.log(hasExoplanet("665544554"));       // false
console.log(hasExoplanet("FGFFCFFGG"));       // true
console.log(hasExoplanet("MONOPLONOMONPLNOMPNOMP")); // false
console.log(hasExoplanet("FREECODECAMP"));    // true
console.log(hasExoplanet("9AB98AB9BC98A"));   // false
console.log(hasExoplanet("ZXXWYZXYWYXZEGZXWYZXYGEE")); // true