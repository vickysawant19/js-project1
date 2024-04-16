const skills = ["Programmer", "Devloper", "Freelancer", "Instructor"];
const containerEl = document.querySelector(".container");

let skillIndex = 0;
let charIndex = 0;

const updateText = () => {
  charIndex++;
  containerEl.innerHTML = `<h1>I am a <span>${skills[skillIndex].slice(
    0,
    charIndex
  )}</span></h1>`;
  if (charIndex === skills[skillIndex].length + 1) {
    skillIndex++;
    charIndex = 0;
  }

  if (skillIndex === skills.length) {
    skillIndex = 0;
  }
};

updateText();
setInterval(updateText, 300);
