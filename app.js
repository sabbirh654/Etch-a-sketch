const GRID_SIZE = 960;
let boxCount = 16;

//grid container
const div = document.createElement("div");
div.classList.add("grid-container");

const gridContainer = document.querySelector(".grid-container");

const mouseEnterEventHandler = function(e) {
    let red = getRandomNumber();
    let green = getRandomNumber();
    let blue = getRandomNumber();
    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function createSquareBoxes(boxCount) {
    for(let i = 0; i < boxCount * boxCount; i++) {
        const squareBox = document.createElement("div");
        squareBox.classList.add("square");
        squareBox.style.width = GRID_SIZE / boxCount + 'px';
        squareBox.style.height = GRID_SIZE / boxCount + 'px';
        gridContainer.append(squareBox);
        squareBox.addEventListener('mouseenter', mouseEnterEventHandler);
    }
}

function getRandomNumber() {
    return Math.floor(Math.random() * 256);
}

const buttonEventHandler = function() {

    const input = getUserInput();

    if(input === undefined) {
        return;
    }

    resetGrid();
    createSquareBoxes(input)
}

function resetGrid() {
    gridContainer.innerHTML = "";
} 

function getUserInput() {
    const value = (prompt("Enter a value between 0 and 100: "));

    if(Number.isInteger(+value) && +value >= 0 && +value <= 100) {
        return +value;
    }

    alert("invalid input")
    getUserInput();
}

const btn = document.querySelector("button");
btn.addEventListener('click', buttonEventHandler);

createSquareBoxes(boxCount);


