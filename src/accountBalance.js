const accountBalance = document.getElementById("account-balance");

module.exports = async function getValues() {
  const response = await fetch("http://localhost:3000/transactions");

  const transactions = await response.json();

  let accountBalanceSum = 0;

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type === "debit") {
      accountBalanceSum -= transactions[i].value;
    } else if (transactions[i].type === "credit") {
      accountBalanceSum += transactions[i].value;
    }
  }
  accountBalance.innerText = `Total de saldo na conta: R$${accountBalanceSum}`;
  if (accountBalanceSum > 0) {
    accountBalance.classList.add("positive");
  } else if (accountBalanceSum === 0) {
    accountBalance.classList.add("neutral");
  } else if (accountBalanceSum < 0) {
    accountBalance.classList.add("negative");
  }
};
