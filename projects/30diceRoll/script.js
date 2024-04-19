const diceCode = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];

const buttonEl = document.querySelector("#roll-button");
const diceEl = document.querySelector("#dice");
const rollHistEl = document.querySelector("#roll-history");
let rollCount = 1;

buttonEl.addEventListener("click", () => {
  rollDice();
});

function rollDice() {
  const diceNo = Math.floor(Math.random() * 6);
  diceEl.innerHTML = `<div> ${diceCode[diceNo]}</div>`;
  diceEl.classList.add("dice-animation");
  setTimeout(() => {
    diceEl.classList.remove("dice-animation");
  }, 1000);
  const histEl = document.createElement("li");
  histEl.innerHTML = `Roll ${rollCount}: <span>${diceCode[diceNo]}</span>`;
  rollHistEl.appendChild(histEl);
  rollCount++;
}
