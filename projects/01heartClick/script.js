const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", (e) => {
  const posX = e.offsetX;
  const posY = e.offsetY;
  const size = Math.round(Math.random() * 100);

  const spanEl = document.createElement("span");

  spanEl.style.top = posY + "px";
  spanEl.style.left = posX + "px";
  spanEl.style.width = size + "px";
  spanEl.style.height = size + "px";

  bodyEl.appendChild(spanEl);

  setTimeout(() => {
    spanEl.remove();
  }, 3000);
});
