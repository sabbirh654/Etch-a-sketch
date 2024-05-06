
const body = document.querySelector("body");
body.style.boxSizing = "border-box";

const GRID_CONTAINER_WIDTH = 960;
const GRID_CONTAINER_HEIGHT = 960; 

const mainContainer = document.querySelector(".main-container");

//button
const button = document.createElement("button");
button.textContent = "Click to set grid size";
button.style.width = "200px";
button.style.height = "50px";

//grid container
const div = document.createElement("div");
div.style.outline = "1px solid black";
div.style.width = GRID_CONTAINER_WIDTH + 'px';
div.style.height = GRID_CONTAINER_HEIGHT + 'px';
div.classList.add("grid-container");

//main container
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.gap = "24px";
mainContainer.style.alignItems = "center";

mainContainer.appendChild(button);
mainContainer.appendChild(div);

//grid container
const gridContainer = document.querySelector(".grid-container");
gridContainer.style.display = "flex";
gridContainer.style.flexWrap= "wrap";

const mouseEnterEventHandler = function(e) {
    let red = getRandom();
    let green = getRandom();
    let blue = getRandom();

    e.target.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
}

function getRandom() {
    return Math.floor(Math.random() * 256);
}


for(let i = 0; i < 16 * 16; i++) {

    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.display = "flex";
    grid.style.width = "60px";
    grid.style.height = "60px";
    grid.style.outline = "1px solid black";
    gridContainer.append(grid);

    grid.addEventListener('mouseenter', mouseEnterEventHandler);
}

const buttonEventHandler = function() {

    const input = GetUserInput();

    if(input === undefined) {
        return;
    }

    let squareBoxWidth = (GRID_CONTAINER_WIDTH / input) + 'px';
    let squareBoxHeight = squareBoxWidth;

    gridContainer.innerHTML = "";

    for(let i = 0; i < input * input; i++) {

        const grid = document.createElement("div");
        grid.classList.add("grid");
        grid.style.width = squareBoxWidth
        grid.style.height = squareBoxHeight;
        grid.style.outline = "1px solid black";
        gridContainer.append(grid);

        grid.addEventListener('mouseenter', mouseEnterEventHandler);
    }
}

function GetUserInput() {
    const value = (prompt("Enter a value : "));

    if(value === null) {
        return;
    }

    if(value === null || isNaN(value) || value < 0 || value > 100) {
        GetUserInput();
    }

    return +value;
}

const btn = document.querySelector("button");
btn.addEventListener('click', buttonEventHandler);


