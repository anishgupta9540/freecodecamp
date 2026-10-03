# https://www.freecodecamp.org/learn/daily-coding-challenge/10-03
# P@ssw0rd Str3ngth!

def checkStrength(password):
    score = 0

    # Rule 1: At least 8 characters
    if len(password) >= 8:
        score += 1

    # Rule 2: Both uppercase and lowercase letters
    if any(c.isupper() for c in password) and any(c.islower() for c in password):
        score += 1

    # Rule 3: At least one number
    if any(c.isdigit() for c in password):
        score += 1

    # Rule 4: At least one special character
    if any(c in "!@#$%^&*" for c in password):
        score += 1

    if score < 2:
        return "weak"
    elif score <= 3:
        return "medium"
    else:
        return "strong"

print(checkStrength("123456"))          # weak
print(checkStrength("pass!!!"))         # weak
print(checkStrength("Qwerty"))          # weak
print(checkStrength("PASSWORD"))        # weak
print(checkStrength("PASSWORD!"))       # medium
print(checkStrength("PassWord%^!"))     # medium
print(checkStrength("qwerty12345"))     # medium
print(checkStrength("S3cur3P@ssw0rd"))  # strong
print(checkStrength("C0d3&Fun!"))        # strong