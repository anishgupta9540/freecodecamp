// P@ssw0rd Str3ngth!
// https://www.freecodecamp.org/learn/daily-coding-challenge/10-03

// P@sswOrd Str3ngth!

// Given a password string, return "weak" , "medium" , or "strong" based on the strength of the
// password.

// A password is evaluated according to the following rules:

// • It is at least 8 characters long.
// • It contains both uppercase and lowercase letters.
// • It contains at least one number.
// • It contains at least one special character from this

// Return "weak" if the password meets fewer than twoofthe rules. Return "medium" if the
// password meets 2 or 3 of the rules. Return " st rong " if the password meets all 4 rules.

// Tests:
// I. checkStrength( " 123456" ) should return "weak"
// 2. checkStrength( "pass! ! ! " ) should return "weak"
// 3. checkStrength( "Qwerty" ) should return "weak"
// 4. checkStrength( "PASSWORD" ) should return "weak" .
// 5. checkStrength( "PASSWORD! ) should return "medium"
// 6. checkStrength( "PassWord%A! ) should return "medium" .
// 7. checkStrength( "qwerty12345" ) should return "medium"
// 8. checkStrength( "S3cur3P@sswØrd" ) should return "strong"
// 9. checkStrength( "CØd3&Fun! " ) should return "strong"

function checkStrength(password) {
    let score = 0;

    if (password.length >= 8) score++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[!@#$%^&*]/.test(password)) score++;

    if (score < 2) return "weak";
    if (score <= 3) return "medium";
    return "strong";
}

console.log(checkStrength('123456'));
console.log(checkStrength('PASSWORD!'));
console.log(checkStrength('PassWord%^!'));
console.log(checkStrength('S3cur3P@ssw0rd'));
console.log(checkStrength('C0d3&Fun!'));


// 123456 → "weak"
// PASSWORD! → "medium"
// PassWord%^! → "medium"
// S3cur3P@ssw0rd → "strong"
// C0d3&Fun! → "strong"
