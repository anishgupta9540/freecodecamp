# Battle of Words
# https://www.freecodecamp.org/learn/daily-coding-challenge/10-12


def battle(myTeam, opposingTeam):
    def word_value(word):
        total = 0

        for char in word:
            value = ord(char.lower()) - ord("a") + 1

            if char.isupper():
                value *= 2

            total += value

        return total

    my_words = myTeam.split(" ")
    opposing_words = opposingTeam.split(" ")

    wins = 0

    for i in range(len(my_words)):
        my_value = word_value(my_words[i])
        opposing_value = word_value(opposing_words[i])

        if my_value > opposing_value:
            wins += 1
        elif my_value < opposing_value:
            wins -= 1

    if wins > 0:
        return "We win"
    elif wins < 0:
        return "We lose"
    else:
        return "Draw"


# Test cases
print(battle("hello world", "hello word"))
# We win

print(battle("Hello world", "hello world"))
# We win

print(battle("lorem ipsum", "kitty ipsum"))
# We lose

print(battle("hello world", "world hello"))
# Draw

print(battle("git checkout", "git switch"))
# We win

print(battle("Cheeseburger with fries", "Cheeseburger with Fries"))
# We lose

print(battle("We must never surrender", "Our team must win"))
# Draw
