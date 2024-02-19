//For loop

let sum1 = 1;
const limitedNumber1 = 50;
const steps1 = +prompt();

if (steps1 > limitedNumber1) {
    console.log('The number is too big');
} else {
    for (let i = 1; i <= steps1; i++) {
        sum1 *= i;
    }
}

console.log(sum1);

//Same with while loop

let sum2 = 1;
const limitedNumber2 = 50;
const steps2 = +prompt();

if (steps2 > limitedNumber2) {
    console.log('The number is too big');
} else {
    let i = 1;
    while (i <= steps2) {
        sum2 *= i;
        i++;
    }
}

console.log(sum2);
