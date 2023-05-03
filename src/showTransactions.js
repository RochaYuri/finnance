const createContainer = () => {
  const container = document.createElement("div");
  container.setAttribute("id", "show-transactions-container");
  const externalDiv = document.querySelector(".show-transactions-div");
  externalDiv.appendChild(container);
};

function createTransactionDiv(transaction) {
  const container = document.querySelector("#show-transactions-container");
  const div = document.createElement("div");
  div.classList.add("transaction-data-div");

  const id = document.createElement("p");
  id.innerText = `Nº da transação: ${transaction.id}`;

  const name = document.createElement("p");
  name.innerText = `Transação realizada por: ${transaction.name}`;

  const value = document.createElement("p");
  value.innerText = `Valor da transação: R$${transaction.value}`;

  div.append(id, name, value);
  if (transaction.type === "debit") {
    div.classList.add("debit");
  } else {
    div.classList.add("credit");
  }

  container.appendChild(div);

  return div;
}

module.exports = function showTransactions() {
  async function getTransactions() {
    const response = await fetch("http://localhost:3000/transactions");
    console.log(response);

    const transactions = await response.json();
    console.log(transactions);

    createContainer();
    transactions.forEach(createTransactionDiv);
  }

  const sub = document.createElement("p");
  sub.classList.add("sub");
  sub.innerHTML =
    'Legenda:<br><span class="credit-sub">• Valor creditado</span> / <span class="debit-sub">• Valor debitado</span>';
  externalDiv.append(sub);

  getTransactions();
};
