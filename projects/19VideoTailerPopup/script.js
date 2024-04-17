const watchBtnEl = document.querySelector(".watch-btn");
const closeBtnEl = document.querySelector(".close-btn");

const videoEl = document.querySelector("video");

const trailercontainerEl = document.querySelector(".trailer-container");

closeBtnEl.addEventListener("click", () => {
  trailercontainerEl.classList.remove("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});

watchBtnEl.addEventListener("click", () => {
  trailercontainerEl.classList.add("active");
});
