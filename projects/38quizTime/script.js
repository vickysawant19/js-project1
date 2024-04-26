const paper = [
  {
    questionNumber: 1,
    question: "What is the result of the following expression: 2 + 2 * 2?",
    options: ["4", "6", "8", "10"],
    answer: "6",
    requiredTimeMs: 5000,
  },
  {
    questionNumber: 2,
    question:
      "Which built-in method returns the calling string value converted to upper case?",
    options: ["toUpperCase()", "toUpperCaseCase()", "toUpper()", "upper()"],
    answer: "toUpperCase()",
    requiredTimeMs: 6000,
  },
  {
    questionNumber: 3,
    question: "What does CSS stand for?",
    options: [
      "Cascading Style Sheets",
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Colorful Style Sheets",
    ],
    answer: "Cascading Style Sheets",
    requiredTimeMs: 7000,
  },
  {
    questionNumber: 4,
    question: "Which of the following is not a JavaScript data type?",
    options: ["string", "boolean", "object", "float"],
    answer: "float",
    requiredTimeMs: 5000,
  },
  {
    questionNumber: 5,
    question:
      "What will be the output of the following code: console.log(5 + '5')?",
    options: ["10", "55", "undefined", "TypeError"],
    answer: "55",
    requiredTimeMs: 4000,
  },
  {
    questionNumber: 6,
    question:
      "Which method in JavaScript is used to remove the whitespace at the beginning and end of any string?",
    options: ["trim()", "strip()", "removeWhitespace()", "deleteWhitespace()"],
    answer: "trim()",
    requiredTimeMs: 6000,
  },
  {
    questionNumber: 7,
    question:
      "What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      "&lt;script src='script.js'&gt;",
      "&lt;script href='script.js'&gt;",
      "&lt;script link='script.js'&gt;",
      "&lt;script file='script.js'&gt;",
    ],
    answer: "&lt;script src='script.js'&gt;",
    requiredTimeMs: 4000,
  },
  {
    questionNumber: 8,
    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/*", "#", "--"],
    answer: "//",
    requiredTimeMs: 3000,
  },
  {
    questionNumber: 9,
    question: "Which method is used to join two or more arrays in JavaScript?",
    options: ["concat()", "join()", "merge()", "append()"],
    answer: "concat()",
    requiredTimeMs: 5000,
  },
  {
    questionNumber: 10,
    question:
      "What is the output of the following code: console.log(typeof [])?",
    options: ["array", "object", "undefined", "null"],
    answer: "object",
    requiredTimeMs: 3000,
  },
];

let result = [
  //   { quesNumber: "", ans: "", isCorrect: "" },
  //   { quesNumber: "", ans: "", isCorrect: "" },
];

const startBtnEl = document.querySelector(".start-btn");
const startContainer = document.querySelector(".container-start");

const quesContainer = document.querySelector(".question-container");

startBtnEl.addEventListener("click", () => {
  startContainer.classList.add("hidden");
  quesContainer.classList.remove("hidden");
  showQuestion(questionNumber);
});

function showQuestion(quesNumber) {
  const quesNumberEl = document.getElementById("quesNumber");
  quesNumberEl.innerText = `${quesNumber + 1}/${paper.length}`;
  console.log(paper[quesNumber]);
  const ques = document.getElementById("question");
  ques.innerText = paper[quesNumber].question;
  const optionsEl = document.querySelector(".options");
  const optionEl = document.querySelectorAll(".option");
  optionEl.forEach((op) => {
    optionsEl.removeChild(op);
  });
  paper[quesNumber].options.forEach((option, idx) => {
    const optionEl = document.createElement("div");
    optionEl.classList.add("option");
    optionEl.innerText = option;
    optionEl.setAttribute("id", `id${idx}`);
    optionEl.addEventListener("click", () => {
      let res = {};
      const index = result.findIndex((res) => res.quesNumber === quesNumber);
      if (index === -1) {
        if (paper[quesNumber].answer === option) {
          optionEl.classList.add("right");
          res = { quesNumber, option, isCorrect: true };
        } else {
          optionEl.classList.add("wrong");
          res = { quesNumber, option, isCorrect: false };
        }
        result.push(res);
        showCorrectAns(paper[quesNumber]);
      } else {
        console.log("already attain");
      }
    });

    optionsEl.appendChild(optionEl);
  });
}

function showCorrectAns(ques) {
  const idx = ques.options.findIndex((q) => q === ques.answer);
  const correctOption = document.getElementById(`id${idx}`);
  correctOption.classList.add("right");
}

const nextBtnEl = document.querySelector(".next-btn");
const resultBtn = document.querySelector(".result-btn");
let questionNumber = 0;

nextBtnEl.addEventListener("click", () => {
  console.log(questionNumber);
  if (paper.length === questionNumber + 1) {
    questionNumber = 0;
  } else {
    questionNumber++;
    showQuestion(questionNumber);
    if (paper.length === questionNumber + 1) {
      nextBtnEl.classList.add("hidden");
      resultBtn.classList.remove("hidden");
      questionNumber = 0;
    }
  }
});

// showQuestion(questionNumber);

resultBtn.addEventListener("click", () => {
  document.querySelector(".question-container").classList.add("hidden");
  resultCloseBtn.parentElement.classList.remove("hidden");
  resultBtn.classList.add("hidden");
  nextBtnEl.classList.remove("hidden");
  let correctCount = 0;
  result.forEach((res) => {
    if (res.isCorrect === true) {
      correctCount++;
    }
  });
  const scoreNumber = document.querySelector(".score-number");

  scoreNumber.innerText = `${correctCount}/${paper.length}`;
  console.log(correctCount, result.length);
});

const resultCloseBtn = document.querySelector(".result-close-btn");

resultCloseBtn.addEventListener("click", () => {
  resultCloseBtn.parentElement.classList.add("hidden");
  startContainer.classList.remove("hidden");
  result = [];
});
