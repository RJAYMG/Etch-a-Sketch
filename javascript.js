const container = document.querySelector("#container");
const wrapper = document.querySelector("#wrapper")
const square = document.createElement("div");
const reset = document.createElement("button");
const newGrid = document.createElement("button");

reset.textContent = "Reset";
reset.style.borderRadius = "4px";
reset.style.color = "white";
reset.style.backgroundColor = "blue";
reset.style.padding = "0.3";

wrapper.appendChild(reset);

square.style.height = "1em";
square.style.width = "1em";
square.style.border = "1px solid black";

for (let i = 0; i < 256; i++) {
    const clone = square.cloneNode(true);
    container.appendChild(clone);
    clone.addEventListener("mouseenter", () => {
    clone.style.backgroundColor = "darkblue";
    });
    clone.addEventListener("mouseleave", () => {
        clone.style.backgroundColor = "blue";
    });
    reset.addEventListener("click", () => {
        clone.style.backgroundColor = "";
    })
};

function createGrid(squareAmount) {
    
}