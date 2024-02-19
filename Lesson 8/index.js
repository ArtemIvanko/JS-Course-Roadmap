const removeElementWithIndex = (arr, elem, newElem) => { //Method 1
    let index = arr.indexOf(elem);
    if (index !== -1) {
        arr.splice(index, 1, newElem);
    }
    return arr;
}
const removeElementWithLoop = (arr, elem, newElem) => { //Method 2
    const elements = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            elements.push(newElem);
        } else {
            elements.push(arr[i]);
        }
    }

    return elements;
}

console.log(removeElementWithIndex([1, 2, 3, 4, 5], 3, 6));
console.log(removeElementWithLoop([1, 2, 3, 4, 5], 3, 6));
