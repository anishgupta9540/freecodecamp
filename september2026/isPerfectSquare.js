// https://www.freecodecamp.org/learn/daily-coding-challenge/09-24

function isPerfectSquare(n) {
    if (n < 0) {
        return false;
    }

    for (let i = 0; i * i <= n; i++) {
        if (i * i === n) {
            return true;
        }
    }

    return false;
}

module.exports = isPerfectSquare;


console.log(isPerfectSquare(9));
console.log(isPerfectSquare(10));
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(25));
console.log(isPerfectSquare(7));
console.log(isPerfectSquare(0));
console.log(isPerfectSquare(-4));