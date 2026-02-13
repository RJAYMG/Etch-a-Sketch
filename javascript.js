const container = document.querySelector("#container");

for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.style.height = "1em";
    square.style.width = "1em";
    square.style.border = "1px solid black";
    container.appendChild(square);
}