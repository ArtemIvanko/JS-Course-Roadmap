const arr = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];
const newArr = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        newArr.push(arr[i]);
    }
}

console.log(newArr);