const arr = [];

const getPoint = () => {
    while (true) {
        const pointValue = prompt('Enter a point (or click "Cancel" to finish):');
        if (pointValue === null) break;
        arr.push(pointValue);
    }
};

getPoint();
}

const addButton = document.createElement("button");
addButton.textContent = "Add point";
document.body.appendChild(addButton);

const createPoint = (item, list) => {
    const listItem = document.createElement("li");
    listItem.textContent = item + " ";
    list.appendChild(listItem);

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    listItem.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
        arr.splice(arr.indexOf(item), 1);
        list.removeChild(listItem);
    });
};

const createList = (arr) => {
    const list = document.createElement("ul");
    document.body.appendChild(list);
    arr.forEach((item) => {
        createPoint(item, list);
    });
};

addButton.addEventListener("click", () => {
    const pointValue = prompt('Enter a point:');
    if (pointValue !== null) {
        arr.push(pointValue);
        createPoint(pointValue, document.querySelector("ul"));
    }
});

createList(arr);
