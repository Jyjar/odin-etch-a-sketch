const container = document.querySelector("#container");
container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.flexDirection = "row";

for(i = 0; i < 256; i++) {
    const gridElement = document.createElement("div");
    gridElement.classList.add("grid-item");
    container.appendChild(gridElement);

    gridElement.addEventListener('mouseover', (event) => {
        gridElement.style.backgroundColor = "black";
    })
}
