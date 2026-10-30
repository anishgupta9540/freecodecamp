//https://www.freecodecamp.org/learn/daily-coding-challenge/10-30
//Nth Prime


function nthPrime(n) {
  let count = 0;
  let num = 1;

  while (count < n) {
    num++;

    let isPrime = true;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      count++;
    }
  }

  return num;
}

console.log(nthPrime(5));    // 11
console.log(nthPrime(10));   // 29
console.log(nthPrime(16));   // 53
console.log(nthPrime(99));   // 523
console.log(nthPrime(1000)); // 7919