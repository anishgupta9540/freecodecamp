// String Count
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-14

function count(string, pattern) {
    let total = 0;

    for (let i = 0; i <= string.length - pattern.length; i++) {
        if (string.slice(i, i + pattern.length) === pattern) {
            total++;
        }
    }

    return total;
}

count('abcdefg', 'def')  // 1
count('hello', 'world')  // 0
count('mississippi', 'iss')  // 2
count('she sells seashells by the seashore', 'sh')  // 3
count('101010101010101010101', '101')  // 10