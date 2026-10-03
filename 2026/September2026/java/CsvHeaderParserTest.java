import static org.junit.jupiter.api.Assertions.assertArrayEquals;

import org.junit.jupiter.api.Test;

class CsvHeaderParserTest {

    @Test
    void shouldParseSimpleHeadings() {
        assertArrayEquals(
                new String[]{"name", "age", "city"},
                CsvHeaderParser.GetHeadings("name,age,city")
        );
    }

    @Test
    void shouldPreserveSpacesInsideHeadings() {
        assertArrayEquals(
                new String[]{"first name", "last name", "phone"},
                CsvHeaderParser.GetHeadings("first name,last name,phone")
        );
    }

    @Test
    void shouldTrimLeadingAndTrailingWhitespace() {
        assertArrayEquals(
                new String[]{"username", "email", "signup date"},
                CsvHeaderParser.GetHeadings("username , email , signup date ")
        );
    }
}