const counterEl = document.querySelectorAll(".counter");

counterEl.forEach((counter) => {
  counter.innerText = 0;
  incrementCounter(counter);
});

function incrementCounter(counter) {
  const dataCeil = counter.getAttribute("data-ceil");
  const incrementAmount = Math.ceil(dataCeil / 10); // Adjust increment amount as needed

  let currentNum = +counter.innerText;
  currentNum += incrementAmount;

  if (currentNum >= dataCeil) {
    counter.innerText = dataCeil;
  } else {
    counter.innerText = currentNum;
    setTimeout(() => incrementCounter(counter), 50);
  }
}
