const applePrice = 10;
const orangePrice = 12;
const kiwiPrice = 15;

const isUserWantFruits = confirm('Do you want fruits?');

if (isUserWantFruits) {
    alert('Ok, let\'s go!');

    const appleCount = +prompt('How many apples do you want?');
    const orangeCount = +prompt('How many oranges do you want?');
    const kiwiCount = +prompt('How many kiwis do you want?');

    const totalPrice = appleCount * applePrice + orangeCount * orangePrice + kiwiCount * kiwiPrice;

    alert(`Final price is ${totalPrice}`);
} else {
    alert('Oh, bye!')
}