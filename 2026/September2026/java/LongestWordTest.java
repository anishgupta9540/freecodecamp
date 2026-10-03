import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;

public class LongestWordTest {

    @Test
    void returnsLongestWord() {
        assertEquals(
            "coding",
            LongestWord.getLongestWord("coding is fun")
        );
    }

    @Test
    void ignoresPeriods() {
        assertEquals(
            "educational",
            LongestWord.getLongestWord(
                "Coding challenges are fun and educational."
            )
        );
    }

    @Test
    void returnsFirstWordWhenThereIsATie() {
        assertEquals(
            "sentence",
            LongestWord.getLongestWord(
                "This sentence has multiple long words."
            )
        );
    }

    @Test
    void handlesSingleWord() {
        assertEquals(
            "hello",
            LongestWord.getLongestWord("hello")
        );
    }
}