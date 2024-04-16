const textEl = document.querySelector(".textarea");
const totalCountEl = document.querySelector(".total-counter");
const remainingCountEl = document.querySelector(".remaining-counter");

textEl.addEventListener("keyup", () => {
  handleChange();
});

function handleChange() {
  totalCountEl.innerText = textEl.value.length;
  remainingCountEl.innerText = textEl.maxLength - textEl.value.length;
}
