function findWords(data) {
    let finalresult = [];

    for (let i = 0; i < data.length; i++) {
        for (let j = 0; j < data[i].length; j++) {
            let ch = "aeiou";

            if (ch.includes(data[i][j])) {
                finalresult.push(data[i]);
                break;
            }
        }
    }

    return finalresult;
}

const data = ["apple", "sky", "dog"];

console.log(findWords(data));

// output
// [ 'apple', 'dog' ]