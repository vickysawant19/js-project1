const quoteEl = document.querySelector(".quote");

const generatEl = document.getElementById("generate");

const categoryEl = document.getElementById("category");

const likeEl = document.getElementById("like");

const listEl = document.querySelector("list");

const quoteArea = document.querySelector(".quoteArea");
const favList = document.querySelector(".favoriteList");

const favListContainer = document.querySelector(".quote-container");
console.log(favListContainer);

const favListArr = localStorage.getItem("favoriteListItem")
  ? JSON.parse(localStorage.getItem("favoriteListItem"))
  : [];

let newQuote = null;

let isLoading = false;
let isLiked = false;

likeEl.style.color = "gray";

API_KEY = "PJotS8uVbnma1n5QmSbxtA==7LL3R7RgXvYXIS08";

function genrateQuote() {
  isLoading = true;
  quoteEl.innerText = "Loading new quote...";
  fetch("https://api.api-ninjas.com/v1/quotes", {
    headers: { "X-Api-Key": API_KEY },
  })
    .then((res) => res.json())
    .then((data) => {
      newQuote = data[0];
      isLoading = false;
      showQuote(newQuote);
    });
}

function showQuote(quoteData) {
  isLiked = false;
  likeEl.style.color = "gray";
  categoryEl.innerText = quoteData.category;
  quoteEl.innerHTML = `${'"' + quoteData.quote + '"'}<div class="author"> ${
    quoteData.author
  }</div>`;
}

function likeQuote() {
  if (isLoading) {
    return;
  }

  if (isLiked) {
    favListArr.pop(newQuote);
    localStorage.setItem("favoriteListItem", JSON.stringify(favListArr));
    likeEl.style.color = "gray";
  } else {
    favListArr.push(newQuote);
    localStorage.setItem("favoriteListItem", JSON.stringify(favListArr));
    likeEl.style.color = "red";
  }
  isLiked = !isLiked;
}

window.addEventListener("load", () => {
  genrateQuote();
});

function goBack() {
  quoteArea.style.display = "flex";
  favList.style.display = "none";
}

function showList() {
  const favlistel = document.querySelectorAll(".quoteItem");
  favlistel.forEach((el) => {
    favListContainer.removeChild(el);
  });
  quoteArea.style.display = "none";
  favList.style.display = "flex";
  favListArr.forEach((itm) => {
    const favEl = document.createElement("div");
    favEl.classList.add("quoteItem");
    favEl.innerText = `${itm.quote}- ${itm.author}`;
    favListContainer.appendChild(favEl);
  });
}

function removeAllList() {
  while (favListArr.length > 0) {
    favListArr.pop();
  }
  localStorage.setItem("favoriteListItem", JSON.stringify(favListArr));
  genrateQuote();
  goBack();
}
