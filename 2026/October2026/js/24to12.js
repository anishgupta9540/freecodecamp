// 24 to 12
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-13


function to12(time) {
    let hours = parseInt(time.slice(0, 2), 10);
    let minutes = time.slice(2);
    let period = hours < 12 ? "AM" : "PM";

    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${period}`;
}

console.log(to12("1124")); // "11:24 AM"
console.log(to12("0900")); // "9:00 AM"
console.log(to12("1455")); // "2:55 PM"
console.log(to12("2346")); // "11:46 PM"
console.log(to12("0030")); // "12:30 AM"