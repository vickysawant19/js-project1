const feedback = [
  {
    icon: "☹️",
    text: "Unhappy",
  },
  {
    icon: "😐",
    text: "Neutral",
  },

  {
    icon: "😀",
    text: "Satisfied",
  },
];

let reviewRecord = "";

const feedbackContainer = document.querySelector(".feedback-container");

const messageContainer = document.querySelector(".message-container");

const feedbackEmojiEl = document.getElementById("feedbackEmoji");

const sendBtnEl = document.getElementById("sendBtn");

feedback.map((fd) => {
  console.log(fd);
  const divEl = document.createElement("div");
  divEl.classList.add("emoji");

  const h1El = document.createElement("h1");
  h1El.innerText = fd.icon;

  const pEl = document.createElement("p");
  pEl.innerText = fd.text;

  divEl.append(h1El, pEl);
  divEl.addEventListener("click", () => {
    const allEmojiEl = document.querySelectorAll(".emoji");

    allEmojiEl.forEach((el) => {
      el.classList.remove("selected");
    });
    divEl.classList.add("selected");
    reviewRecord = fd.text;
  });

  feedbackEmojiEl.appendChild(divEl);
});

sendBtnEl.addEventListener("click", () => {
  if (reviewRecord) {
    feedbackContainer.classList.remove("active");
    messageContainer.classList.add("active");
    document.querySelector(
      ".review-text"
    ).innerText = `Feedback : ${reviewRecord}`;
  }
  return;
});
