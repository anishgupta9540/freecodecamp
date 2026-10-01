def get_longest_word(sentence):
    words = sentence.split(" ")
    longest = ""

    for word in words:
        clean_word = word.replace(".", "")

        if len(clean_word) > len(longest):
            longest = clean_word

    return longest