//Homework | Lesson 3 | Fingers task

let finger = prompt('Enter finger number');
switch (finger) {
    case '1':
        alert('Thumb');
        break;
    case '2':
        alert('Index');
        break;
    case '3':
        alert('Middle');
        break;
    case '4':
        alert('Ring');
        break;
    case '5':
        alert('Little');
        break;
    default:
        alert('Wrong number');
        break;
}

//Ну і якщо таска з фруктами досі актуальна, то вона тут :)

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