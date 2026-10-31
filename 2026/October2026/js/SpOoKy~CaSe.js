//https://www.freecodecamp.org/learn/daily-coding-challenge/10-31
//SpOoKy~CaSe

function spookify(str) {
  let count = 0;

  return str
    .replace(/[_-]/g, "~")
    .toLowerCase()
    .split("")
    .map(char => {
      if (char === "~") return char;

      count++;
      return count % 2 === 1
        ? char.toUpperCase()
        : char;
    })
    .join("");
}


console.log(spookify("hello_world"));
console.log(spookify("Spooky_Case"));
console.log(spookify("TRICK-or-TREAT"));
console.log(spookify("c_a-n_d-y_-b-o_w_l"));
console.log(spookify("thE_hAUntEd-hOUsE-Is-fUll_Of_ghOsts"));