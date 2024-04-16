const bodyEl = document.querySelector("body");

const inputEl = document.querySelector(".input");

inputEl.checked = JSON.parse(localStorage.getItem("darkMode"));
updateBody();
function updateBody() {
  if (inputEl.checked) {
    bodyEl.style.background = "#f0f0f0";
  } else {
    bodyEl.style.background = "#212121";
  }
}

inputEl.addEventListener("click", () => {
  localStorage.setItem("darkMode", JSON.stringify(inputEl.checked));
  updateBody();
});
