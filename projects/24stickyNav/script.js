const navEl = document.querySelector(".navbar");

const bottomEl = document.querySelector(".bottom-container");

window.addEventListener("scroll", (e) => {
  console.log(bottomEl.offsetTop, navEl.offsetHeight);
  if (window.scrollY > bottomEl.offsetTop - navEl.offsetHeight) {
    navEl.classList.remove("active");
  } else {
    navEl.classList.add("active");
  }
});
