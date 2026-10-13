# 24 to 12
# https://www.freecodecamp.org/learn/daily-coding-challenge/10-13


def to12(time):
    hours = int(time[:2])
    minutes = time[2:]
    period = "AM" if hours < 12 else "PM"

    hours = hours % 12
    if hours == 0:
        hours = 12

    return f"{hours}:{minutes} {period}"


print(to12("1124"))
print(to12("0900"))
print(to12("1455"))
print(to12("2346"))
print(to12("0030"))
