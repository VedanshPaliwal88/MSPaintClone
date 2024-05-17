let sides = 16;
let clicked = false;
let container = document.querySelector("#container");
let color = "ff0000";

container.addEventListener("mousedown", () => {
    clicked = true;
});

container.addEventListener("mouseup", () => {
    clicked = false;
});

function toColour(e) {
    if(clicked) {
        e.target.classList.add("coloured");
    }
}

function createGrid (side) {
    let grid = document.createElement("div");
    grid.style.border = "1px solid black";
    
    let gridSize = document.documentElement.clientHeight * 0.7;
    let cellSize = gridSize/side; 

    // console.log(cellSize);

    for(let i = 0; i < side; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < side; j++) {
            let cell = document.createElement("div");
            // cell.classList.add("cell");
            cell.style.height = cellSize + "px";
            cell.style.width = cellSize + "px";

            cell.addEventListener("mouseover", function(e){
                if(clicked) e.target.style.backgroundColor = "#" + color;
            });
    
            cell.addEventListener("mousedown", function(e){
                e.target.style.backgroundColor = "#" + color;
            });
    
            row.appendChild(cell);
        }
    
        grid.appendChild(row);
    }
    container.insertBefore(grid, container.firstChild);
}
createGrid(sides);


let paintButton = document.createElement("button")
paintButton.textContent = "Paint"
paintButton.addEventListener("click", function(){
    color = "000000";
})
container.append(paintButton)

let eraserButton = document.createElement("button");
eraserButton.textContent = "Erase";
eraserButton.addEventListener("click", function() {
    color = "FFFFFF";
})
container.append(eraserButton);


let sizeButton = document.createElement("button");
sizeButton.textContent = "Change Grid size";
sizeButton.addEventListener("click", function() {
    let size = parseInt(prompt("Enter number of sides for grid: "));
    if(size <= 100) {
        container.removeChild(container.firstChild);
        createGrid(size);
    } else {
        alert("Size above 100 not allowed");
    }
})
container.appendChild(sizeButton);