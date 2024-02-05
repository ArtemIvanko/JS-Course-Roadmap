const arr = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];
const newArr1 = [];
const newArr2 = [];
const newArr3 = [];

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        newArr1.push(arr[i]);
    }
}

console.log(newArr1);

// And using filter method
arr.filter((item) => {
    if (item) {
        newArr2.push(item)
    }
})

console.log(newArr2)

// And using forEach method

arr.forEach((item) => {
    if (item) {
        newArr3.push(item)
    }
})

console.log(newArr3)