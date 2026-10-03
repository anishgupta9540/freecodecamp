from longest_word import get_longest_word


def test_returns_longest_word():
    assert get_longest_word("coding is fun") == "coding"


def test_ignores_periods():
    assert (
        get_longest_word(
            "Coding challenges are fun and educational."
        )
        == "educational"
    )


def test_returns_first_word_when_there_is_a_tie():
    assert (
        get_longest_word(
            "This sentence has multiple long words."
        )
        == "sentence"
    )


def test_handles_single_word():
    assert get_longest_word("hello") == "hello"