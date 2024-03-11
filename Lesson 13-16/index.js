const arr = [];
const maxArrLength = +prompt("Enter the number of points");

const mapArrList = (maxValue) => {
    if (maxValue > 10 || maxValue <= 0) {
        return alert("The number of points should be between 0 and 10")
    }

    for (let i = 0; i < maxValue; i++) {
        const pointValue = prompt("Enter a point") || "Empty Point";

        arr.push(pointValue);
    }
}

mapArrList(maxArrLength);

const createList = (arr) => {
    const list = document.createElement("ul");
    document.body.appendChild(list);

    arr.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        list.appendChild(listItem);
    })
}

createList(arr);
