// 24 to 12
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-13

public class Main {
    public static String to12(String time) {
        int hours = Integer.parseInt(time.substring(0, 2));
        String minutes = time.substring(2);
        String period = hours < 12 ? "AM" : "PM";

        hours = hours % 12;
        if (hours == 0) {
            hours = 12;
        }

        return hours + ":" + minutes + " " + period;
    }

    public static void main(String[] args) {
        System.out.println(to12("1124"));
        System.out.println(to12("0900"));
        System.out.println(to12("1455"));
        System.out.println(to12("2346"));
        System.out.println(to12("0030"));
    }
}