const btnEl = document.querySelector(".btn");

const imgEl = document.querySelector(".img-container");

btnEl.addEventListener("click", () => {
  for (let index = 0; index < 6; index++) {
    const img = document.createElement("img");
    img.src = `https://picsum.photos/300?random=${Math.round(
      Math.random() * 100
    )}`;
    imgEl.appendChild(img);
  }
});
