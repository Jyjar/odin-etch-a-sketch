const chooseGridSize = document.querySelector("#chooseGridSize");
chooseGridSize.addEventListener('click', (event) => {
    let size = parseInt(prompt("Enter Grid Size (Max: 100)"));
    if (size == Nan || size < 0) {
        console.log(size)
        alert("Invalid input, try again");
    }
    if (size > 100) {
        alert("Size too large! Setting to 100.");
        size = 100;
    }
    container.remove();
    createGrid(size);
})

function getRandomColor() {
    return Math.floor(Math.random() * 255)
}

function createGrid(size) {
    const container = document.createElement("div");
    container.setAttribute("id", "container");
    document.body.appendChild(container);

    const itemSize = 500 / size;

    
    for(i = 0; i < size * size; i++) {
        const gridElement = document.createElement("div");
        gridElement.classList.add("grid-item");
        gridElement.style.opacity = "1";
        gridElement.style.width = `${itemSize}px`;
        gridElement.style.height = `${itemSize}px`;
        container.appendChild(gridElement);
    
        gridElement.addEventListener('mouseover', (event) => {
            gridElement.style.backgroundColor = `rgba(${getRandomColor()}, ${getRandomColor()}, ${getRandomColor()})`;
            console.log(gridElement.style.opacity)
            gridElement.style.opacity = `${gridElement.style.opacity - 0.1}`
        })
    }

}

createGrid(16);

