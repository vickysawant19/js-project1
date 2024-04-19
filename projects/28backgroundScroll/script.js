const backgroundImageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

const containerEl = document.querySelector(".container");

function updateImage() {
  backgroundImageEl.style.opacity = 1 - window.pageYOffset / 800;
  backgroundImageEl.style.backgroundSize = 160 - window.scrollY;
}
