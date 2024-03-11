const arr = [];

while (true) {
    const pointValue = prompt('Enter a point (or click "Cancel" to finish):');
    if (pointValue === null) break;
    arr.push(pointValue);
}

const createList = (arr) => {
    const list = document.createElement("ul");
    document.body.appendChild(list);

    arr.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
};

createList(arr);
