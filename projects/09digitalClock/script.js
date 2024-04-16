const hoursEl = document.querySelector("#hours");
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const ampm = document.querySelector("#ampm");

function showtime() {
  const time = new Date();
  let hours = time.getHours();
  document.title = time.toLocaleTimeString();

  hoursEl.innerText = hours > 12 ? hours - 12 : hours;
  minutesEl.innerText = time.getMinutes();
  secondsEl.innerText = time.getSeconds();

  ampm.innerText = time.getHours() >= 12 ? "PM" : "AM";
}

setInterval(() => {
  showtime();
}, 1000);
