
const body = document.querySelector("body");
body.style.boxSizing = "border-box";

const mainContainer = document.querySelector(".main-container");

//button
const button = document.createElement("button");
button.textContent = "Click to set grid size";
button.style.width = "200px";
button.style.height = "50px";

//grid container
const div = document.createElement("div");
div.style.border = "1px solid black";
div.style.width = "960px";
div.style.height = "960px";
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


for(let i = 0; i < 16 * 16; i++) {

    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.display = "flex";
    grid.style.width = "58.666666px";
    grid.style.height = "58.66666px";
    grid.style.border = "1px solid black";
    gridContainer.append(grid);
}


