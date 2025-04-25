// script.js
const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  if (creditScore >= minCreditScoreForDuplex && annualIncome >= minIncomeForDuplex) {
    return "You qualify for a duplex, condo, and car loan.";
  }

  if (creditScore >= minCreditScoreForCondo && annualIncome >= minIncomeForCondo) {
    return "You qualify for a condo and car loan.";
  }

  if (creditScore >= minCreditScoreForCar && annualIncome >= minIncomeForCar) {
    return "You qualify for a car loan.";
  }

  return "You don't qualify for any loans.";
}

function checkEligibility() {
  const annualIncome = parseInt(document.getElementById('annualIncome').value);
  const creditScore = parseInt(document.getElementById('creditScore').value);
  
  if (isNaN(annualIncome) || isNaN(creditScore)) {
    document.getElementById('loanMessage').textContent = "Please enter valid income and credit score.";
  } else {
    const loanMessage = getLoanMessage(annualIncome, creditScore);
    document.getElementById('loanMessage').textContent = loanMessage;
  }
}
