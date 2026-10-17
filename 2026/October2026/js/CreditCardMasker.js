// https://www.freecodecamp.org/learn/daily-coding-challenge/10-17
// Credit Card Masker

// function mask(card) {
//     return card.replace(/\d(?=.*\d{4})/g, '*');
// }


function mask(card) {
    let result = "";
    let digitCount = 0;

    for (let i = 0; i < card.length; i++) {
        if (card[i] >= '0' && card[i] <= '9') {
            digitCount++;
        }
    }

    let digitsSeen = 0;

    for (let i = 0; i < card.length; i++) {
        if (card[i] >= '0' && card[i] <= '9') {
            digitsSeen++;

            if (digitsSeen <= digitCount - 4) {
                result += '*';
            } else {
                result += card[i];
            }
        } else {
            result += card[i];
        }
    }

    return result;
}

console.log(mask("4012-8888-8888-1881"));
// ****-****-****-1881

console.log(mask("5105 1051 0510 5100"));
// **** **** **** 5100

console.log(mask("6011 1111 1111 1117"));
// **** **** **** 1117

console.log(mask("2223-0000-4845-0010"));
// ****-****-****-0010
