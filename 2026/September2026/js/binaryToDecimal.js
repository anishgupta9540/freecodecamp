// Binary to Decimal
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-01

function toDecimal(binary) {
  let decimal = 0;

  for (const digit of binary) {
    decimal = decimal * 2 + Number(digit);
  }

  return decimal;
}

toDecimal("101");     // 5
toDecimal("1010");    // 10
toDecimal("10010");   // 18
toDecimal("1010101"); // 85