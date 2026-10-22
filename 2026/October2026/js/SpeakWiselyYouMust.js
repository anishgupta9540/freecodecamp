// https://www.freecodecamp.org/learn/daily-coding-challenge/10-22
// Speak Wisely, You Must

function wiseSpeak(sentence) {
    let words = sentence.slice(0, -1).split(" ");
    let keywords = ["have", "must", "are", "will", "can"];

    let index = words.findIndex(word => keywords.includes(word));

    let firstPart = words.slice(0, index + 1).join(" ").toLowerCase();
    let secondPart = words.slice(index + 1).join(" ");

    let result = secondPart.charAt(0).toUpperCase() + secondPart.slice(1);

    return result + ", " + firstPart + sentence.slice(-1);
}

console.log(wiseSpeak("You must speak wisely."));
console.log(wiseSpeak("You can do it!"));
console.log(wiseSpeak("Do you think you will complete this?"));
console.log(wiseSpeak("All your base are belong to us."));
console.log(wiseSpeak("You have much to learn."));