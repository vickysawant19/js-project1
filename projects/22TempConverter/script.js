const celsiusEl = document.querySelector("#celsius");
const kelvinEl = document.querySelector("#kelvin");
const faherentitEl = document.querySelector("#faherentit");

celsiusEl.addEventListener("input", () => {
  const celsiusValue = parseFloat(celsiusEl.value);
  faherentitEl.value = (celsiusValue * 1.8 + 32).toFixed(2);
  kelvinEl.value = (celsiusValue + 273.15).toFixed(2);
});

faherentitEl.addEventListener("input", () => {
  const faherentitValue = parseFloat(faherentitEl.value);
  celsiusEl.value = ((faherentitValue - 32) / 1.8).toFixed(2);
  kelvinEl.value = ((faherentitValue - 32) / 1.8 + 273.15).toFixed(2);
});

kelvinEl.addEventListener("input", () => {
  const kelvinValue = parseFloat(kelvinEl.value);
  celsiusEl.value = (kelvinValue - 273.15).toFixed(2);
  faherentitEl.value = ((kelvinValue - 273.15) * 1.8 + 32).toFixed(2);
});
