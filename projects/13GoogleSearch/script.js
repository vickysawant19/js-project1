const containerEl = document.querySelector(".container");

const magnifireEl = document.querySelector(".magnifire");

magnifireEl.addEventListener("click", () => {
  containerEl.classList.toggle("active");
});
