const container = document.querySelector("#container");
const reset = document.querySelector("#reset");
const newGrid = document.querySelector("#new-grid");

function createGrid(sideSquare) {
    if (sideSquare >= 100) {
        alert("That's too big!");
        sideSquare = 16;;
    };
    
    container.innerHTML = ""
    const totalSquare = sideSquare * sideSquare;
    const squareSize = (100 / sideSquare) + '%';

    for (let i=0; i<totalSquare; i++) {
        const square = document.createElement("div");
        square.style.height = squareSize;
        square.style.width = squareSize;
        square.classList.add("etch-square");
        container.appendChild(square);
        square.addEventListener("mouseenter", () => {
            square.style.backgroundColor = "darkblue";
        });
        square.addEventListener("touchstart", () => {
            square.style.backgroundColor = "darkblue";
        });
        square.addEventListener("mouseleave", () => {
            square.style.backgroundColor = "blue";
        })
        square.addEventListener("touchend", () => {
            square.style.backgroundColor = "blue";
        })
    };
};

reset.addEventListener("click", () => {
    const Allsquare = document.querySelectorAll(".etch-square")
    Allsquare.forEach(square => square.style.backgroundColor = "white")
});

newGrid.addEventListener("click", () => {
    container.innerHTML = "";
    const gridAmount = prompt("How many squares by side?");
    if (gridAmount === "" || gridAmount === null || isNaN(gridAmount) || gridAmount < 0) {
        alert("Input valid number!");
        return createGrid(16);
    };
    createGrid(gridAmount);
});

createGrid(16)