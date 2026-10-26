//https://www.freecodecamp.org/learn/daily-coding-challenge/10-26
//Duration Formatter

function format(seconds) {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    const paddedSeconds = String(secs).padStart(2, '0');

    if (hours > 0) {
        return `${hours}:${String(minutes).padStart(2, '0')}:${paddedSeconds}`;
    }

    return `${minutes}:${paddedSeconds}`;
}

console.log(format(500));   // "8:20"
console.log(format(4000));  // "1:06:40"
console.log(format(1));     // "0:01"
console.log(format(5555));  // "1:32:35"
console.log(format(99999)); // "27:46:39"