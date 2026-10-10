// Space Week Day 7: Launch Fuel
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-10

function launchFuel(payload) {
    let totalMass = payload;
    let fuel = 0;

    while (true) {
        const additionalFuel = totalMass / 5 - fuel;

        if (additionalFuel < 1) {
            fuel += additionalFuel;
            break;
        }

        fuel += additionalFuel;
        totalMass = payload + fuel;
    }

    return Number(fuel.toFixed(1));
}

console.log(launchFuel(50));    // 12.4
console.log(launchFuel(500));   // 124.8
console.log(launchFuel(243));   // 60.7
console.log(launchFuel(11000)); // 2749.8
console.log(launchFuel(6214));  // 1553.4

