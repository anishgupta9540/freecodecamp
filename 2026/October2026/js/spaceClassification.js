// Space Week Day 1: Stellar Classification
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-04

function classification(temperature) {
    if (temperature >= 30000) return "O";
    if (temperature >= 10000) return "B";
    if (temperature >= 7500) return "A";
    if (temperature >= 6000) return "F";
    if (temperature >= 5200) return "G";
    if (temperature >= 3700) return "K";
    return "M";
}

function classification(temperature) {
    switch (true) {
        case temperature >= 30000:
            return "O";

        case temperature >= 10000:
            return "B";

        case temperature >= 7500:
            return "A";

        case temperature >= 6000:
            return "F";

        case temperature >= 5200:
            return "G";

        case temperature >= 3700:
            return "K";

        default:
            return "M";
    }
}