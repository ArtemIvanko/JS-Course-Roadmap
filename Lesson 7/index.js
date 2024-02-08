const valueA = +prompt('Enter the first number');
const valueB = +prompt('Enter the second number');

const getCalculationResult = (a, b) => {
    if (isNaN(a) || isNaN(b)) {
        console.error('Invalid input. Please enter valid numbers.');
        return 0;
    } // so, this condition is not necessary, because we are using "+" before prompt, so it will always return a number, but just in case, I will leave it here

    if (a % 2 === 0 && b % 2 === 0) {
        console.log(a * b)

        return a * b;
    } else if (a % 2 !== 0 && b % 2 !== 0) {
        console.log(a + b)

        return a + b;
    } else {
        console.log(a % 2 !== 0 ? a : b)

        return a % 2 !== 0 ? a : b;
    }
}

getCalculationResult(valueA, valueB);