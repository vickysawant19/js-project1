const btnEl = document.getElementById("btn");

const jokeEl = document.getElementById("joke");

const container = document.querySelector(".container");

const getJoke = async () => {
  try {
    jokeEl.innerText = "Loading...";
    btnEl.disabled = true;
    btnEl.style.backgroundColor = "white";
    const res = await fetch("https://api.api-ninjas.com/v1/dadjokes", {
      headers: {
        "X-Api-Key": "PJotS8uVbnma1n5QmSbxtA==7LL3R7RgXvYXIS08",
      },
    });
    const data = await res.json();
    if (data) {
      jokeEl.innerText = data[0].joke;
    }
    btnEl.disabled = false;
    btnEl.style.backgroundColor = "white";
  } catch (error) {
    btnEl.disabled = false;
    jokeEl.innerText = "error getting joke";
  }
};
getJoke();
btnEl.addEventListener("click", getJoke);
