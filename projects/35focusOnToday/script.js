const taskContainers = document.querySelectorAll(".task-container");

const taskInput = document.querySelectorAll(".task-input");

const errorMessage = document.querySelector(".error-message");

const customChecks = document.querySelectorAll(".custom-check");

const progressTop = document.querySelector(".top");

let taskCompleted = 0;

// let tasks = [
//   {
//     name: "task1";
//     task: "",
//     completed: false,
//   },
// ];

customChecks.forEach((cc) => {
  cc.addEventListener("click", () => {
    const taksValues = [...taskInput].every((task) => task.value);
    if (taksValues) {
      cc.parentElement.classList.toggle("completed");
      console.log(cc.nextElementSibling.name);
      taskIndex = tasks.findIndex((t) => t.name === cc.nextElementSibling.name);
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
      console.log(tasks);
      localStorage.setItem("todayTask", JSON.stringify(tasks));
      updateProgressBar();
    } else {
      errorMessage.classList.add("show-error");
    }
  });
});

taskInput.forEach((taskInput) => {
  taskInput.addEventListener("focus", () => {
    errorMessage.classList.remove("show-error");
  });
});

updateProgressBar();

function updateProgressBar() {
  const completed = document.querySelectorAll(".completed");
  taskCompleted = completed.length;
  setTimeout(() => {
    progressTop.innerText =
      completed.length >= 1 ? `${taskCompleted}/3 task completed` : "";
  }, 300);

  switch (taskCompleted) {
    case 0:
      progressTop.style.width = "0px";
      progressTop.innerText = "";
      progressTop.style.backgroundColor = "transparent";
      break;
    case 1:
      progressTop.style.width = "33%";
      progressTop.style.backgroundColor = "green";
      break;
    case 2:
      progressTop.style.width = "66%";
      break;
    case 3:
      progressTop.style.width = "100%";
      break;

    default:
      break;
  }
}

let tasks = localStorage.getItem("todayTask")
  ? JSON.parse(localStorage.getItem("todayTask"))
  : [];

console.log(tasks);

taskInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    const existingTaskIndex = tasks.findIndex(
      (task) => task.name === e.target.name
    );
    if (existingTaskIndex !== -1) {
      tasks[existingTaskIndex].task = e.target.value;
    } else {
      tasks.push({
        name: e.target.name,
        task: e.target.value,
        completed: false,
      });
    }
    localStorage.setItem("todayTask", JSON.stringify(tasks));
  });
});

tasks.forEach((task) => {
  progressTop.style.width = "0px";
  const taskEl = document.querySelector(`[name = ${task.name}]`);
  taskEl.value = task.task;
  if (task.completed) {
    taskEl.parentElement.classList.add("completed");
  } else {
    taskEl.parentElement.classList.remove("completed");
  }
  updateProgressBar();
});
