const API_KEY = "c3a06b6af5f632ce85708981ba291c7d4036f1cf";

const URI = `https://emoji-api.com/emojis?access_key=${API_KEY}`;

let emoji = [];

async function getEmoji() {
  const res = await fetch(URI);
  const data = await res.json();
  for (let i = 0; i < data.length; i++) {
    emoji.push({
      emojiName: data[i].character,
      emojiCode: data[i].unicodeName,
    });
  }
}

getEmoji();

const btnEl = document.getElementById("btn");

const emojiNameEl = document.getElementById("emoji-name");

btnEl.addEventListener("click", () => {
  if (emoji.length > 1) {
    const random = (Math.random() * 1500).toFixed();
    btnEl.innerText = emoji[random]?.emojiName;
    btnEl.style.fontSize = "3rem";

    emojiNameEl.innerText = `${(emoji[random]?.emojiCode).split(" ")[1]}`;
  }
});
