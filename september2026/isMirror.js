// https://www.freecodecamp.org/learn/daily-coding-challenge/09-23

function isMirror(str1, str2) {
  // Remove non-alphabetical characters
  str1 = str1.replace(/[^a-zA-Z]/g, "");
  str2 = str2.replace(/[^a-zA-Z]/g, "");

  // Reverse str1
  const reversed = str1.split("").reverse().join("");

  // Must be different strings and must match in reverse
  return str1 !== str2 && reversed === str2;
}

module.exports = { isMirror };

console.log(isMirror("helloworld", "helloworld"));
// false

console.log(isMirror("Hello World", "dlroW olleH"));
// true

console.log(isMirror("RaceCar", "raCecaR"));
// true

console.log(isMirror("RaceCar", "RaceCar"));
// false

console.log(isMirror("Mirror", "rorrim"));
// false

console.log(isMirror("Hello World", "dlroW-olleH"));
// true

console.log(isMirror("Hello World", "!dlroW !olleH"));
// true

// ---------------------------------------------------------------------------------

// function isMirror(str1, str2) {
//   let clean1 = "";
//   let clean2 = "";

//   // Remove non-alphabetic characters from str1
//   for (let i = 0; i < str1.length; i++) {
//     let ch = str1[i];

//     if (
//       (ch >= "a" && ch <= "z") ||
//       (ch >= "A" && ch <= "Z")
//     ) {
//       clean1 += ch;
//     }
//   }

//   // Remove non-alphabetic characters from str2
//   for (let i = 0; i < str2.length; i++) {
//     let ch = str2[i];

//     if (
//       (ch >= "a" && ch <= "z") ||
//       (ch >= "A" && ch <= "Z")
//     ) {
//       clean2 += ch;
//     }
//   }

//   // Must not be exactly the same
//   if (clean1 === clean2) {
//     return false;
//   }

//   // Compare str1 backwards with str2
//   if (clean1.length !== clean2.length) {
//     return false;
//   }

//   for (let i = 0; i < clean1.length; i++) {
//     if (clean1[i] !== clean2[clean2.length - 1 - i]) {
//       return false;
//     }
//   }

//   return true;
// }

// console.log(isMirror("abc", "cba"));       // true
// console.log(isMirror("hello", "olleh"));   // true
// console.log(isMirror("abc", "abc"));       // false
// console.log(isMirror("a-b-c", "cba"));     // true