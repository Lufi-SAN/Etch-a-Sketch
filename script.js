window.addEventListener("load", (e) => {
  console.log(e);
  let container = document.querySelector(".container");
  for (let i = 0; i < 256; i++) {
    const divs = document.createElement("div");
    container.appendChild(divs);
    divs.classList.add("boxes");
  }

  const divs = document.querySelectorAll(".boxes");
  console.log(divs);
  divs.forEach((div) => {
    div.addEventListener("mouseover", firstFunction);
  });
});

function firstFunction(e) {
  console.log(this.classList.value);
  console.log(e.target.classList.value);
  if (e.target.classList.value === "boxes hover") {
    e.target.classList.remove("hover");
  } else {
    e.target.classList.add("hover");
  }
}

//   function again() {
//     divs.forEach((div) => {
//       div.addEventListener("mouseover", (e) => {
//         e.target.classList.remove("hover");
//         again();
//       });
//     });
//   }
