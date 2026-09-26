function speeding(speeds, limit) {
    let speedingVehicles = [];

    for (let speed of speeds) {
        if (speed > limit) {
            speedingVehicles.push(speed - limit);
        }
    }

    if (speedingVehicles.length === 0) {
        return [0, 0];
    }

    let total = 0;

    for (let amount of speedingVehicles) {
        total += amount;
    }

    let average = total / speedingVehicles.length;

    return [speedingVehicles.length, average];
}

module.exports = { speeding };