// Phone Number Formatter
// https://www.freecodecamp.org/learn/daily-coding-challenge/09-30

function formatNumber(number) {
  return `+${number[0]} (${number.slice(1, 4)}) ${number.slice(4, 7)}-${number.slice(7, 11)}`;
}

console.log(formatNumber("05552340182"));
// "+0 (555) 234-0182"

console.log(formatNumber("15554354792"));
// "+1 (555) 435-4792"