const names = ["Prakash", "Astha", "Priyansh", "Pramod"];

let idx = 1;

document.querySelector(".click").addEventListener("click", () => {
  showName();
});

function showName() {
  document.querySelector(".name").innerText = names[idx];

  idx++;
  if (idx >= names.length) {
    idx = 0;
  }
}

showName();
