// Battle of Words
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-12

public class BattleOfWords {

    public static String battle(String myTeam, String opposingTeam) {
        String[] myWords = myTeam.split(" ");
        String[] opposingWords = opposingTeam.split(" ");

        int wins = 0;

        for (int i = 0; i < myWords.length; i++) {
            int myValue = wordValue(myWords[i]);
            int opposingValue = wordValue(opposingWords[i]);

            if (myValue > opposingValue) {
                wins++;
            } else if (myValue < opposingValue) {
                wins--;
            }
        }

        if (wins > 0) {
            return "We win";
        } else if (wins < 0) {
            return "We lose";
        } else {
            return "Draw";
        }
    }

    private static int wordValue(String word) {
        int sum = 0;

        for (char ch : word.toCharArray()) {
            int value = Character.toLowerCase(ch) - 'a' + 1;

            if (Character.isUpperCase(ch)) {
                value *= 2;
            }

            sum += value;
        }

        return sum;
    }

    public static void main(String[] args) {
        System.out.println(battle("hello world", "hello word"));
        // We win

        System.out.println(battle("Hello world", "hello world"));
        // We win

        System.out.println(battle("lorem ipsum", "kitty ipsum"));
        // We lose

        System.out.println(battle("hello world", "world hello"));
        // Draw

        System.out.println(battle("git checkout", "git switch"));
        // We win

        System.out.println(battle("Cheeseburger with fries",
                                  "Cheeseburger with Fries"));
        // We lose

        System.out.println(battle("We must never surrender",
                                  "Our team must win"));
        // Draw
    }
}