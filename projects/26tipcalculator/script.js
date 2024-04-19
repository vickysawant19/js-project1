const billAmount = 200;
let tipPercent = 0;
let totalBill = 0;

const billAmountEl = document.querySelector("#bill-amount");
billAmountEl.value = billAmount;

const tipButtons = document.querySelectorAll(".btn");

const billtoPay = document.querySelector("#bill-to-pay");
billtoPay.innerText = `Rs. ${billAmount}`;

tipButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    tipButtons.forEach((b) => {
      b.style.border = "none";
      b.style.backgroundColor = "bisque";
    });
    tipPercent = parseInt(btn.innerText.split("%")[0]);
    btn.style.border = "1px solid red";
    btn.style.backgroundColor = "yellow";

    totalBill = (billAmount * tipPercent) / 100 + billAmount;
    billtoPay.innerText = `Rs. ${totalBill}`;
  });
});
