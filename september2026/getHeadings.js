// https://www.freecodecamp.org/learn/daily-coding-challenge/09-28

function getHeadings(csvLine) {
  return csvLine.split(",").map(heading => heading.trim());
}

module.exports = { getHeadings };

console.log(getHeadings("name,age,city"));
// ["name", "age", "city"]

console.log(getHeadings("first name,last name,phone"));
// ["first name", "last name", "phone"]

console.log(getHeadings("username , email , signup date "));
// ["username", "email", "signup date"]
