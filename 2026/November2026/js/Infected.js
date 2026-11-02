//https://www.freecodecamp.org/learn/daily-coding-challenge/11-02
//Infected


function infected(days) {
  let computers = 1;

  for (let day = 1; day <= days; day++) {
    computers *= 2;

    if (day % 3 === 0) {
      computers -= Math.ceil(computers * 0.2);
    }
  }

  return computers;
}

console.log(infected(1));  // 2
console.log(infected(3));  // 6
console.log(infected(8));  // 152
console.log(infected(17)); // 39808
console.log(infected(25)); // 5217638