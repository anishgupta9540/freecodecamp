// https://www.freecodecamp.org/learn/daily-coding-challenge/10-19
// HTML Attribute Extractor

function extractAttributes(element) {
    const regex = /(\w+)="([^"]*)"/g;
    const attributes = [];
    let match;

    while ((match = regex.exec(element)) !== null) {
        attributes.push(`${match[1]}, ${match[2]}`);
    }

    return attributes;
}

function extractAttributes(element) {
    let result = [];
    let i = 0;

    while (i < element.length) {
        if (element[i] === ' ' && element[i + 1] !== undefined) {
            i++;

            let name = "";

            while (
                i < element.length &&
                element[i] !== '=' &&
                element[i] !== ' ' &&
                element[i] !== '>' &&
                element[i] !== '/'
            ) {
                name += element[i];
                i++;
            }

            if (element[i] === '=') {
                i++;

                if (element[i] === '"') {
                    i++;
                    let value = "";

                    while (i < element.length && element[i] !== '"') {
                        value += element[i];
                        i++;
                    }

                    result[result.length] = name + ", " + value;
                }
            }
        }

        i++;
    }

    return result;
}

// Test 1
console.log(extractAttributes('<span class="red"></span>'));
// ["class, red"]

// Test 2
console.log(extractAttributes('<meta charset="UTF-8" />'));
// ["charset, UTF-8"]

// Test 3
console.log(extractAttributes("<p>Lorem ipsum dolor sit amet</p>"));
// []

// Test 4
console.log(extractAttributes('<input name="email" type="email" required="true" />'));
// ["name, email", "type, email", "required, true"]

// Test 5
console.log(extractAttributes('<button id="submit" class="btn btn-primary">Submit</button>'));
// ["id, submit", "class, btn btn-primary"]
