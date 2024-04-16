// const deg = [0, 60, 120, 180, 240, 300];

const imageContainerEl = document.querySelector(".image-container");
const prevEl = document.querySelector("#prev");
const nextEl = document.querySelector("#next");

let deg = 0;

function rotateImage() {
  imageContainerEl.style.transform = `perspective(1000px) rotateY(${deg}deg)`;
}

prevEl.addEventListener("click", () => {
  deg = deg + 60;
  rotateImage();
});

nextEl.addEventListener("click", () => {
  deg = deg - 60;
  rotateImage();
});

setInterval(() => {
  deg = deg - 60;
  rotateImage();
}, 5000);
