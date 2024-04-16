const dayEl = document.getElementById("day");

const hourEl = document.getElementById("hour");

const minutesEl = document.getElementById("minutes");

const secondEl = document.getElementById("second");

const newYearTime = new Date("01 / 01 / 2025 00:00:00").getTime();

function getRemeningTime() {
  const currentTime = new Date().getTime();

  const remainingTime = newYearTime - currentTime;

  const second = 1000;
  const minutes = second * 60;
  const hour = minutes * 60;
  const day = hour * 24;

  const d = Math.floor(remainingTime / day);
  const h = Math.floor((remainingTime % day) / hour);
  const m = Math.floor((remainingTime % hour) / minutes);
  const s = Math.floor((remainingTime % minutes) / second);

  dayEl.innerText = d;
  hourEl.innerText = h;
  minutesEl.innerText = m;
  secondEl.innerText = s;
  setTimeout(() => {
    getRemeningTime();
  }, 1000);
}

getRemeningTime();
