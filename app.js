const mainContainer = document.querySelector(".main-container");

//button
const button = document.createElement("button");
button.textContent = "Click to set grid size";
button.style.width = "200px";
button.style.height = "50px";

//grid container
const div = document.createElement("div");
div.classList.add = "gridContainer";
div.style.border = "2px solid black";
div.style.width = "650px";
div.style.height = "650px";

//main container
mainContainer.style.display = "flex";
mainContainer.style.flexDirection = "column";
mainContainer.style.gap = "24px";
mainContainer.style.alignItems = "center";

mainContainer.appendChild(button);
mainContainer.appendChild(div);




