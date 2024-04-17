const secondEl = document.querySelector(".second");
const minuteEl = document.querySelector(".minutes");
const hourEl = document.querySelector(".hour");
const audioEl = document.querySelector("audio");

function showTime() {
  const time = new Date();

  const second = time.getSeconds();
  const minute = time.getMinutes();
  const hour = time.getHours();

  const secondAngle = (360 / 60) * second;
  const minuteAngle = (360 / 60) * minute;
  const hourAngle = (360 / 12) * hour + (30 / 60) * minute; // Adjust for minute hand influence

  secondEl.style.transform = `rotate(${secondAngle}deg)`;
  minuteEl.style.transform = `rotate(${minuteAngle}deg)`;
  hourEl.style.transform = `rotate(${hourAngle}deg)`;
  audioEl.currentTime = 0;
  audioEl.play();
}
document.addEventListener("click", () => {
  audioEl.play();
});

setInterval(() => {
  showTime();
}, 1000);

showTime();
