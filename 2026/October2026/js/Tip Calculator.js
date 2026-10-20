// https://www.freecodecamp.org/learn/daily-coding-challenge/10-20
// Tip Calculator

function calculateTips(price, customTip) {
    const amount = parseFloat(price.replace("$", ""));
    const percent = parseFloat(customTip.replace("%", ""));

    return [15, 20, percent].map(tip => {
        return "$" + (amount * tip / 100).toFixed(2);
    });
}

calculateTips("$10.00", "25%");
// ["$1.50", "$2.00", "$2.50"]

calculateTips("$89.67", "26%");
// ["$13.45", "$17.93", "$23.31"]

calculateTips("$19.85", "9%");
// ["$2.98", "$3.97", "$1.79"]




function calculateTips(price, customTip) {
    let amount = 0;
    let decimal = false;
    let fraction = 0;

    for (let i = 1; i < price.length; i++) {
        if (price[i] === ".") {
            decimal = true;
            continue;
        }

        let digit = price.charCodeAt(i) - 48;

        if (decimal) {
            fraction++;
            amount = amount + digit / (fraction === 1 ? 10 : 100);
        } else {
            amount = amount * 10 + digit;
        }
    }

    let percent = 0;

    for (let i = 0; i < customTip.length - 1; i++) {
        percent = percent * 10 + customTip.charCodeAt(i) - 48;
    }

    let tips = [15, 20, percent];
    let result = [];

    for (let i = 0; i < tips.length; i++) {
        let tip = Math.round(amount * tips[i]) / 100;
        let cents = Math.round(tip * 100);

        let dollars = Math.floor(cents / 100);
        let remaining = cents % 100;

        let centsText = remaining < 10 ? "0" + remaining : "" + remaining;

        result[i] = "$" + dollars + "." + centsText;
    }

    return result;
}


console.log(calculateTips("$10.00", "25%"));
// ["$1.50", "$2.00", "$2.50"]

console.log(calculateTips("$89.67", "26%"));
// ["$13.45", "$17.93", "$23.31"]

console.log(calculateTips("$19.85", "9%"));
// ["$2.98", "$3.97", "$1.79"]