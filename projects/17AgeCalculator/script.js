const birthDateEl = document.getElementById("date");
const btnEl = document.getElementById("calculate-age");
const ageNumber = document.querySelector(".age-number");

function calculateAge() {
  if (birthDateEl.value === "") {
    alert("please enter a birthdate");
  } else {
    const todayDate = new Date();
    const birthDate = new Date(birthDateEl.value);
    let years = todayDate.getFullYear() - birthDate.getFullYear();
    let months = todayDate.getMonth() - birthDate.getMonth();
    if (
      months < 0 ||
      (months === 0 && todayDate.getDate() < birthDate.getDate())
    ) {
      years--;
      months = 12 - (birthDate.getMonth() - todayDate.getMonth());
    }
    const days = todayDate.getDate() - birthDate.getDate();
    ageNumber.innerText = `You are ${years > 0 ? years + " years" : ""} ${
      months > 0 ? months + " months" : ""
    } ${days} days old`;
  }
}

btnEl.addEventListener("click", () => {
  calculateAge();
});
