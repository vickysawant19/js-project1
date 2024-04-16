const btnEl = document.querySelector(".btn");

btnEl.addEventListener("mouseover", (e) => {
  const x = e.offsetX;
  const y = e.offsetY;
  btnEl.style.setProperty("--xPos", x + "px");
  btnEl.style.setProperty("--yPos", y + "px");
});
