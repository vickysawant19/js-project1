const containerEl = document.querySelector(".container");
let char = "1234567890abcdef";

function addColorContainer() {
  const elements = document.querySelectorAll(".color-container");
  elements.forEach((element) => {
    containerEl.removeChild(element);
  });

  for (let i = 0; i < 8; i++) {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += char[Math.floor(Math.random() * 16)];
    }
    const colorContainerEl = document.createElement("div");
    colorContainerEl.classList.add("color-container");
    colorContainerEl.innerText = color;
    colorContainerEl.style.backgroundColor = color;
    containerEl.appendChild(colorContainerEl);
  }
}
addColorContainer();

setInterval(() => {
  addColorContainer();
}, 10000);
