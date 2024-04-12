const arr = [];

const setDataStorage = () => {
  localStorage.setItem("points", JSON.stringify(arr));
}

const getDataStorage = (arr) => {
  const getDataItem = JSON.parse(localStorage.getItem("points"));

  if (getDataItem !== null) {
    getDataItem.forEach((item) => {
      arr.push(item);
    });
  }
}

const getPoint = () => {
  getDataStorage(arr)

  while (true) {
    const pointValue = prompt('Enter a point (or click "Cancel" to finish):');
    if (pointValue === null) break;
    arr.push(pointValue);
  }
};

//TODO: rename "customButton"
const createButton = (name, parent, callback) => {
  const button = document.createElement("button");
  button.textContent = name;
  parent.appendChild(button);
  button.addEventListener("click", callback);
}

const createPoint = (item, list) => {
  setDataStorage();

  const listItem = document.createElement("li");
  listItem.textContent = item + " ";
  list.prepend(listItem);

  createButton("Remove", listItem, () => {
    arr.splice(arr.indexOf(item), 1);
    localStorage.setItem("points", JSON.stringify(arr));
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

createButton("Add point", document.body, () => {
  const pointValue = prompt('Enter a point:');
  if (pointValue !== null) {
    arr.push(pointValue);
    createPoint(pointValue, document.querySelector("ul"));
  }
});

createButton("Clear", document.body, () => {
  localStorage.clear();
  arr.length = 0;
  document.querySelector("ul").remove();
  createList(arr);
});

getPoint();
createList(arr);
