function secondLargest(arr) {
  let largest = -Infinity;
  let second = -Infinity;

  for (const num of arr) {
    if (num > largest) {
      second = largest;
      largest = num;
    } else if (num > second && num < largest) {
      second = num;
    }
  }

  return second;
}

module.exports = { secondLargest };

console.log(secondLargest([12,34,67,89,34]));