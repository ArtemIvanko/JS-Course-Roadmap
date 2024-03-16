const arr = [];

const setDataStorage = () => {
    localStorage.setItem("points", JSON.stringify(arr));
}

const getPoint = () => {
    while (true) {
        const pointValue = prompt('Enter a point (or click "Cancel" to finish):');
        if (pointValue === null) break;
        arr.push(pointValue);
    }
};

getPoint();

//TODO: rename "customButton"
const customButton = (name, parent, callback) => {
    const button = document.createElement("button");
    button.textContent = name;
    parent.appendChild(button);
    button.addEventListener("click", callback);
}

const createPoint = (item, list) => {
    setDataStorage();

    const listItem = document.createElement("li");
    listItem.textContent = item + " ";
    list.appendChild(listItem);

    customButton("Remove", listItem, () => {
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

customButton("Add point", document.body, () => {
    const pointValue = prompt('Enter a point:');
    if (pointValue !== null) {
        arr.push(pointValue);
        createPoint(pointValue, document.querySelector("ul"));
    }
});

customButton("Clear", document.body, () => {
    localStorage.clear();
    arr.length = 0;
    document.querySelector("ul").remove();
    createList(arr);
});

createList(arr);
