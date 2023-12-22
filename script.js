const grid = document.querySelector(".container");
const btnClear = document.querySelector(".clear");
const color = document.querySelector(".colorSelected")
const buttonList = document.querySelectorAll("button")
let r;
let g;
let b;

addSquares = (squareNum) => {
  const squareSize = 500 / squareNum;
  const totalSquares = squareNum * squareNum;
  for (i = 0; i < totalSquares; i++) {
    let square = document.createElement("div");
    square.classList.add("gridItem");
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;
    grid.appendChild(square);
  }

  items = document.querySelectorAll(".gridItem");

  items.forEach((item) => {
    item.onmouseover = () => {
      item.style.backgroundColor = `${color.value}`;
    };
  });
};

addSquares(16);

chooseSize = () => {
  let size = prompt("Ingrese el nuevo tamaño");
  grid.innerHTML = "";
  addSquares(size);
};

paintRandomColor = () => {
  r = Math.floor(Math.random() * 255) + 1;
  g = Math.floor(Math.random() * 255) + 1;
  b = Math.floor(Math.random() * 255) + 1;

  items.forEach((item) => {
    item.onmouseover = () => {
      item.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      r = Math.floor(Math.random() * 255) + 1;
      g = Math.floor(Math.random() * 255) + 1;
      b = Math.floor(Math.random() * 255) + 1;
    };
  });
};

eraser = () => {
  items.forEach((item) => {
    item.onmouseover = () => {
      item.style.backgroundColor = "white";
    };
  });
};

btnClear.addEventListener("click", () => {
  items.forEach((item) => {
    item.style.backgroundColor = "white";
  });
});

buttonList.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.add("deselected");
    button.classList.add("selected");
  });
});
