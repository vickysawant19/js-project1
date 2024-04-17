const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");

const timerEl = document.querySelector(".count");

let timerSecond = 15;

let interval = null;

function showTime() {
  const minutes = Math.floor(timerSecond / 60);
  const second = timerSecond % 60;
  const time =
    minutes.toString().padStart(2, "0") +
    ":" +
    second.toString().padStart(2, "0");

  timerEl.innerText = time;
  if (timerSecond === 0) {
    alert("Time up!!!");
    clearInterval(interval);
  }
}

startEl.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      timerSecond--;
      showTime();
    }, 1000);
  }
});

stopEl.addEventListener("click", () => {
  clearInterval(interval);
  showTime();
});

resetEl.addEventListener("click", () => {
  clearInterval(interval);
  timerSecond = 1500;
  showTime();
});

showTime();
