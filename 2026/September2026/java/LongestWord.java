public class LongestWord {
    public static String getLongestWord(String sentence) {
        String[] words = sentence.split(" ");
        String longest = "";

        for (String word : words) {
            String cleanWord = word.replace(".", "");

            if (cleanWord.length() > longest.length()) {
                longest = cleanWord;
            }
        }

        return longest;
    }
}