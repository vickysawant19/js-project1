const kits = ["snare", "kick", "crash", "tom"];

const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
  const btnEl = document.createElement("button");
  btnEl.innerText = kit;
  btnEl.classList.add("btn");
  btnEl.style.backgroundImage = `url(images/${kit}.png)`;
  containerEl.appendChild(btnEl);
  const audioEl = document.createElement("audio");
  audioEl.src = `sounds/${kit}.mp3`;
  audioEl.preload = "auto";
  btnEl.appendChild(audioEl);
  btnEl.addEventListener("click", () => {
    audioEl.currentTime = 0;
    audioEl.play();
  });
  window.addEventListener("keydown", (e) => {
    if (e.key === kit.slice(0, 1)) {
      audioEl.currentTime = 0;
      audioEl.play();
      btnEl.style.transform = "scale(.9)";
      setTimeout(() => {
        btnEl.style.transform = "scale(1)";
      }, 100);
    }
  });
});
