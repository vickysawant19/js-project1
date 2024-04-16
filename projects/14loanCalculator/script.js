function calculateLoan() {
  const loanAmountEl = document.getElementById("loan-amount").value;
  const instrestEl = document.getElementById("intrest-rate").value;
  const months = document.getElementById("months").value;

  const intrest = (loanAmountEl * (instrestEl * 0.01)) / months;
  console.log(intrest);

  const monthlyPayment = (loanAmountEl / months + intrest).toFixed(2);

  const monthlyPaymentEl = document.querySelector(".monthly-pay");

  monthlyPaymentEl.innerText = ` monthly payment: ${monthlyPayment}`;
}

calculateLoan();
