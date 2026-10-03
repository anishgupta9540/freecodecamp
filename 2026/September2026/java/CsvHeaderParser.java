// https://www.freecodecamp.org/learn/daily-coding-challenge/09-28

import java.util.Arrays;

public class CsvHeaderParser {

    public static String[] GetHeadings(String csvLine) {
        return Arrays.stream(csvLine.split(","))
                .map(String::trim)
                .toArray(String[]::new);
    }
}
String[] headings = GetHeadings("username , email , signup date ");

System.out.println(Arrays.toString(headings));