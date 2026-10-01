const speeding = require('./speeding');

describe('speeding', () => {
    test('returns the number of speeding vehicles and their average excess speed', () => {
        expect(speeding([50, 70, 80, 55, 100], 60))
            .toEqual([3, 70 / 3]);
    });

    test('returns [0, 0] when no vehicles are speeding', () => {
        expect(speeding([40, 50, 60], 60))
            .toEqual([0, 0]);
    });

    test('handles a single speeding vehicle', () => {
        expect(speeding([50, 70, 55], 60))
            .toEqual([1, 10]);
    });

    test('handles multiple speeding vehicles with the same speed', () => {
        expect(speeding([80, 80, 80], 60))
            .toEqual([3, 20]);
    });

    test('handles decimal speeds', () => {
        expect(speeding([55.5, 70.5, 80.5], 60))
            .toEqual([2, 15.5]);
    });

    test('vehicles exactly at the speed limit are not speeding', () => {
        expect(speeding([60, 60, 70], 60))
            .toEqual([1, 10]);
    });
});