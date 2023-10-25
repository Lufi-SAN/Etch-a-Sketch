const button = document.querySelector("#button");
const gridContainer = document.querySelector("#gridContainer");
const radioContainer = document.querySelector("#radioContainer");
let colorInQuestion = "";

document.addEventListener("DOMContentLoaded", dclFunction);

button.addEventListener("click", function () {
  while (gridContainer.firstChild) {
    gridContainer.removeChild(gridContainer.firstChild);
  }
  let enterPrompt = prompt("Enter your preffered grid", "Max: 100");
  let gridNumber = parseInt(enterPrompt, 10);
  if (!isNaN(gridNumber) && gridNumber <= 100) {
    numberOfSquares = gridNumber;
    createDiv(numberOfSquares);
  } else {
    alert("Chill");
  }
});

radioContainer.addEventListener("change", function (event) {
  colorInQuestion = event.target.id;
});

function dclFunction() {
  createDiv();
}

function createDiv(numberOfSquares = 16) {
  for (let i = 0; i < numberOfSquares; i++) {
    const div = document.createElement("div");
    div.classList.add("parentDiv");
    gridContainer.appendChild(div);
  }

  gridContainer.childNodes.forEach(function (node) {
    for (let i = 0; i < numberOfSquares; i++) {
      const innerDiv = document.createElement("div");
      innerDiv.addEventListener("mouseover", function (event) {
        if (colorInQuestion.trim() !== "") {
          //then it checks length of classList of innerDiv
          //if its 2, remove the second child
          //then add this class
          if (innerDiv.classList.length > 1) {
            let indexToRemove = 1;
            let classNameToRemove = innerDiv.classList[indexToRemove];
            innerDiv.classList.remove(classNameToRemove);
            if (colorInQuestion === "rainbowbtn") {
              function getRandomNumber() {
                return Math.floor(Math.random() * 256);
              }
              innerDiv.classList.add(colorInQuestion);
              innerDiv.style.setProperty("--r", getRandomNumber());
              innerDiv.style.setProperty("--g", getRandomNumber());
              innerDiv.style.setProperty("--b", getRandomNumber());
            } else {
              innerDiv.classList.add(colorInQuestion);
            }
          } else {
            if (colorInQuestion === "rainbowbtn") {
              function getRandomNumber() {
                return Math.floor(Math.random() * 256);
              }
              innerDiv.classList.add(colorInQuestion);
              innerDiv.style.setProperty("--r", getRandomNumber());
              innerDiv.style.setProperty("--g", getRandomNumber());
              innerDiv.style.setProperty("--b", getRandomNumber());
            } else {
              innerDiv.classList.add(colorInQuestion);
            }
          }
        }
      });
      innerDiv.classList.add("innerDiv");
      node.appendChild(innerDiv);
    }
  });
}
