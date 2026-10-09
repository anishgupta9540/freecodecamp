// Space Week Day 6: Moon Phase
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-09

function moonPhase(date) {
    const reference = new Date("2000-01-06T00:00:00Z");
    const target = new Date(date + "T00:00:00Z");

    const daysPassed = Math.floor(
        (target - reference) / (1000 * 60 * 60 * 24)
    );

    const cycleDay = (daysPassed % 28) + 1;

    if (cycleDay <= 7) return "New";
    if (cycleDay <= 14) return "Waxing";
    if (cycleDay <= 21) return "Full";
    return "Waning";
}

console.log(moonPhase("2000-01-12")); // "New"
console.log(moonPhase("2000-01-13")); // "Waxing"
console.log(moonPhase("2014-10-15")); // "Full"
console.log(moonPhase("2012-10-21")); // "Waning"
console.log(moonPhase("2022-12-14")); // "New"