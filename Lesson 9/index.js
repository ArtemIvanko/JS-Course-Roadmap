const getUserName = prompt('Enter your name: ')
const getAge = prompt('Enter your age: ')
const getEmail = prompt('Enter your email: ')

const getUserData = (userName, userAge, userEmail) => {
    const arr = []

    const userData = {
        name: userName ? userName : 'No name',
        age: userAge ? userAge : 'No age',
        email: userEmail ? userEmail : 'No email',
    }

    arr.push(userData)

    for (let key in userData) {
        console.log(key + ': ' + userData[key])
    }

    console.log(arr);

    return arr
}

getUserData(getUserName, getAge, getEmail)

//PS, решил сделать проверку на пустые значения, чтобы не было undefined в массиве, если пользователь не введет данные
// Плюс добавил массив, чтобы можно было хранить данные пользователя, если их будет несколько и заодно закрепить знания по работе с массивами