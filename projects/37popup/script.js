const btnEl = document.querySelector(".btn");

const subsFormEl = document.querySelector(".subscribe-form");

const subsCloseEl = document.querySelector(".subs-close");

btnEl.addEventListener("click", (e) => {
  subsFormEl.classList.add("show-form");
  e.stopPropagation();
});

subsCloseEl.addEventListener("click", () => {
  subsFormEl.classList.remove("show-form");
});

subsFormEl.addEventListener("click", (e) => {
  e.stopPropagation();
});

window.addEventListener("click", () => {
  subsFormEl.classList.remove("show-form");
});
