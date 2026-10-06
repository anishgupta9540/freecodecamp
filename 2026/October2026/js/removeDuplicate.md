using set method
const data = [12, 12, 34, 45, 56, 67, 34, 45];
const result = [...new Set(data)];
console.log(result);
----------------------------------------------------------
using es6 feature filter method
const data01 = [12, 12, 34, 45, 56, 67];
const result = data.filter((value, index) => {
    return data.indexOf(value) === index;
});
console.log(result);
----------------------------------------------------------
using traditional loop method
const data01 = [12, 12, 34, 45, 56, 67];
function App(data) {
    const dup = [];
    for (let i = 0; i <= data.length - 1; i++) {
        if (!dup.includes(data[i])) {
            dup.push(data[i]);
        };
    };
    return dup;
};
console.log(App(data01));
----------------------------------------------------------
Remove duplicate without using any inbuild method
const data = [12.12, 34, 45, 56, 67, 34, 45];
const result = [];
for (let i = 0; i < data.length; i++) {
    let duplicate = false;
    for (let j = 0; j < result.length; j++) {
        if (data[i] === result[j]) {
            duplicate = true;
            break;
        }
    }
    if (!duplicate) {
        result[result.length] = data[i];
    }
}
console.log(result);
----------------------------------------------------------
