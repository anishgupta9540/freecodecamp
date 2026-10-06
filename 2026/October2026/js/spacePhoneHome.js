// Space Week Day 3: Phone Home
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-06

function sendMessage(distances) {
    const totalDistance = distances.reduce((sum, distance) => sum + distance, 0);

    // Distance / speed = travel time in seconds
    const travelTime = totalDistance / 300000;

    // Satellites passed through = number of distances - 1
    const satelliteDelay = (distances.length - 1) * 0.5;

    const totalTime = travelTime + satelliteDelay;

    return Number(totalTime.toFixed(4));
}

console.log(sendMessage([300000, 300000]));
// 2.5

console.log(sendMessage([384400, 384400]));
// 3.0627

console.log(sendMessage([1000000, 500000000, 1000000]));
// 1674.3333

console.log(sendMessage([10000, 21339, 50000, 31243, 10000]));
// 2.4086