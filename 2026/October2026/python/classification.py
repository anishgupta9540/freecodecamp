# Space Week Day 1: Stellar Classification
# https://www.freecodecamp.org/learn/daily-coding-challenge/10-04


def classification(temperature):
    match temperature:
        case temp if temp >= 30000:
            return "O"
        case temp if temp >= 10000:
            return "B"
        case temp if temp >= 7500:
            return "A"
        case temp if temp >= 6000:
            return "F"
        case temp if temp >= 5200:
            return "G"
        case temp if temp >= 3700:
            return "K"
        case _:
            return "M"


# Test cases
print(classification(5778))  # G
print(classification(2400))  # M
print(classification(9999))  # A
print(classification(3700))  # K
print(classification(3699))  # M
print(classification(210000))  # O
print(classification(6000))  # F
print(classification(11432))  # B


def classification(temperature):
    if temperature >= 30000:
        return "O"
    elif temperature >= 10000:
        return "B"
    elif temperature >= 7500:
        return "A"
    elif temperature >= 6000:
        return "F"
    elif temperature >= 5200:
        return "G"
    elif temperature >= 3700:
        return "K"
    else:
        return "M"


# Test cases
print(classification(5778))  # G
print(classification(2400))  # M
print(classification(9999))  # A
print(classification(3700))  # K
print(classification(3699))  # M
print(classification(210000))  # O
print(classification(6000))  # F
print(classification(11432))  # B
