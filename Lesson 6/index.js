const arr = [false, 12, '23424', false, 324, '', true, null, 5, -0, 0, 9, undefined, NaN, 6.354, undefined, 7, null];
const newArr1 = [];
const newArr2 = []; //filter method 1
const newArr3 = [];
const newArr4 = arr.filter((item) => !!item); //filter method 2
const newArr5 = arr.filter((item) => Boolean(item)); //filter method 3

for (let i = 0; i < arr.length; i++) {
    if (arr[i]) {
        newArr1.push(arr[i]);
    }
}

console.log(newArr1);

// And using filter method. Method 1:
arr.filter((item) => {
    if (item !== 0 && item !== null && item !== false && item !== undefined && item !== null && item !== "" && !isNaN(item)) {
        newArr2.push(item)
    }
})

console.log(newArr2);

// And using forEach method

arr.forEach((item) => {
    if (item) {
        newArr3.push(item)
    }
})

console.log(newArr3);
console.log(newArr4);
console.log(newArr5);

//PS: За код стайл или нейминг особо не обращай внимания, это просто примеры разных методов и оно как-то так получилось...