// Missing Socks
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-18

function sockPairs(pairs, cycles) {
    let socks = pairs * 2;

    for (let cycle = 1; cycle <= cycles; cycle++) {
        if (cycle % 2 === 0) socks--; // Lose one sock
        if (cycle % 3 === 0) socks++; // Find one sock
        if (cycle % 5 === 0) socks--; // Wear out one sock
        if (cycle % 10 === 0) socks += 2; // Buy a pair

        socks = Math.max(0, socks);
    }

    return Math.floor(socks / 2);
}
console.log(sockPairs(2, 5));  // 1
console.log(sockPairs(1, 2));  // 0
console.log(sockPairs(5, 11)); // 4
console.log(sockPairs(6, 25)); // 3
console.log(sockPairs(1, 8));  // 0