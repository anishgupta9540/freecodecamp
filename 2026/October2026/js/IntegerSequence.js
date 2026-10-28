//https://www.freecodecamp.org/learn/daily-coding-challenge/10-27
//Integer Sequence

function sequence(n) {
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += i;
  }
  console.log(result);
  return result;
}

sequence(5);  // Console: 12345
sequence(10); // Console: 12345678910
sequence(1);  // Console: 1
sequence(27); // Console: 123456789101112131415161718192021222324252627