const arr = [];

const addButton = document.createElement("button");
addButton.textContent = "Add point";
document.body.appendChild(addButton);

const createPoint = (arr, list) => {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }

    arr.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    });
};

const createList = (arr) => {
    let list = document.querySelector("ul");

    if (!list) {
        list = document.createElement("ul");
        document.body.appendChild(list);
    }

    createPoint(arr, list);
};

addButton.addEventListener("click", () => {
    const pointValue = prompt('Enter a point:');

    if (pointValue === null) return;

    arr.push(pointValue);
    createList(arr);
});
