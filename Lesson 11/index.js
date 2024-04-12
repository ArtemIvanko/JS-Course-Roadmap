function ConstructPerson(name, age, address, phone) {
    this.name = name;
    this.age = age;
    this.address = address;
    this.phone = phone;
}

function promptPersonData(personNumber) {
    const name = prompt(`Enter name for person ${personNumber}`) || 'Unknown name';
    const age = prompt(`Enter age for person ${personNumber}`) || 'Unknown age';
    const address = prompt(`Enter address for person ${personNumber}`) || 'Unknown address';
    const phone = prompt(`Enter phone number for person ${personNumber}`) || 'Unknown phone';

    return new ConstructPerson(name, age, address, phone);
}

//We can change this to any number of users we want to add by adding a prompt to ask the user for the number of users they want to add,
// but for now, i decided to hard code it to 2
const numUsers = 2;

const users = [];
for (let i = 1; i <= numUsers; i++) {
    users.push(promptPersonData(i));
}
users.forEach(user => console.log(user));
