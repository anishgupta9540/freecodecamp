// Space Week Day 7: Launch Fuel
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-10

public class SpaceWeek {
    public static double launchFuel(double payload) {
        double totalMass = payload;
        double fuel = 0;

        while (true) {
            double additionalFuel = totalMass / 5 - fuel;

            if (additionalFuel < 1) {
                fuel += additionalFuel;
                break;
            }

            fuel += additionalFuel;
            totalMass = payload + fuel;
        }

        return Math.round(fuel * 10.0) / 10.0;
    }

    public static void main(String[] args) {
        System.out.println(launchFuel(50));    // 12.4
        System.out.println(launchFuel(500));   // 124.8
        System.out.println(launchFuel(243));   // 60.7
        System.out.println(launchFuel(11000)); // 2749.8
        System.out.println(launchFuel(6214));  // 1553.4
    }
}