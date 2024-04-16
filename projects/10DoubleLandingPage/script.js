const leftEl = document.querySelector(".left");
const rightEl = document.querySelector(".right");

const containerEl = document.querySelector(".container");

leftEl.addEventListener("mouseover", () => {
  containerEl.classList.remove("active-right");
  containerEl.classList.add("active-left");
});

rightEl.addEventListener("mouseover", () => {
  containerEl.classList.add("active-right");
  containerEl.classList.remove("active-left");
});
