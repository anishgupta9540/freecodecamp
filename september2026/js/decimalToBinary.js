// Decimal to Binary
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-02

function toBinary(n) {
  if (n === 0) return "0";

  let binary = "";

  while (n > 0) {
    binary = (n % 2) + binary;
    n = Math.floor(n / 2);
  }

  return binary;
}

toBinary(5);   // "101"
toBinary(12);  // "1100"
toBinary(50);  // "110010"
toBinary(99);  // "1100011"