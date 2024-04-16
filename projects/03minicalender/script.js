const dayNameEl = document.querySelector("#day-name");
const dayNumberEl = document.querySelector("#day-number");
const monthEl = document.querySelector("#month-name");
const yearEl = document.querySelector("#year");

const currDate = new Date();

//show month
monthEl.innerHTML = currDate.toLocaleString("en", { month: "long" });

//show Day Name
dayNameEl.innerText = currDate.toLocaleString("en", { weekday: "long" });

//show date
dayNumberEl.innerText = currDate.getDate();

//show year
yearEl.innerText = currDate.getUTCFullYear();
