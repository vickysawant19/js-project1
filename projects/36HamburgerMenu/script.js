const menuEl = document.querySelector(".menu-btn");

const navEl = document.querySelector("nav");

const menuCloseBtn = document.querySelector(".close-icon");

menuEl.addEventListener("click", (e) => {
  navEl.classList.add("active");
  e.stopPropagation();
});

menuCloseBtn.addEventListener("click", (e) => {
  navEl.classList.remove("active");
  //   e.stopPropagation();
});

navEl.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", (e) => {
  navEl.classList.remove("active");
  e.stopPropagation();
});
