//https://www.freecodecamp.org/learn/daily-coding-challenge/11-01
//Signature Validation

function verify(message, key, signature) {
  const getValue = (str) => {
    let sum = 0;

    for (const char of str) {
      if (char >= "a" && char <= "z") {
        sum += char.charCodeAt(0) - 96;
      } else if (char >= "A" && char <= "Z") {
        sum += char.charCodeAt(0) - 38;
      }
    }

    return sum;
  };

  return getValue(message) + getValue(key) === signature;
}

console.log(verify("foo", "bar", 57)); // true
console.log(verify("foo", "bar", 54)); // false
console.log(verify("freeCodeCamp", "Rocks", 238)); // true
console.log(verify("Is this valid?", "No", 210)); // false
console.log(verify("Is this valid?", "Yes", 233)); // true
console.log(
  verify("Check out the freeCodeCamp podcast,", "in the mobile app", 514)
); // true