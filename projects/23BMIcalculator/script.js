const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");

const bmiResultEl = document.getElementById("bmi-result");
const weightCondEl = document.getElementById("weight-condition");

const btnEl = document.getElementById("btn");

btnEl.addEventListener("click", () => {
  calculateBMI();
});

function calculateBMI() {
  const height = parseInt(heightEl.value);
  const weight = parseInt(weightEl.value);
  const heightMeters = height / 100;

  const bmi = weight / (heightMeters * heightMeters);

  console.log(bmi);

  // Display the calculated BMI
  bmiResultEl.value = bmi.toFixed(2);
  console.log(bmiResultEl);

  // Set weight condition based on BMI
  if (bmi > 25) {
    weightCondEl.style.backgroundColor = "red";
    weightCondEl.textContent = "Overweight";
  } else if (bmi < 18.5) {
    weightCondEl.style.backgroundColor = "yellow";
    weightCondEl.textContent = "Underweight";
  } else {
    weightCondEl.style.backgroundColor = "green";
    weightCondEl.textContent = "Normal weight";
  }
}
