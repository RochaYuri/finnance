const createLabel = (text, forInput) => {
  const label = document.createElement("label");
  label.innerText = text;
  label.setAttribute("for", forInput);
  label.classList.add("label-form");
  return label;
};

const createInput = (type, id, name) => {
  const input = document.createElement("input");
  input.setAttribute("type", type);
  input.setAttribute("id", id);
  input.setAttribute("name", name);
  if (type === "text") {
    input.classList.add("input-text-form");
  } else if (type === "number") {
    input.classList.add("input-number-form");
  } else if (type === "radio") {
    input.classList.add("input-radio-form");
  }
  input.setAttribute("required", "");
  return input;
};

const createButton = (text, type, id = null) => {
  const button = document.createElement("button");
  button.innerText = text;
  button.setAttribute("type", type);
  button.setAttribute("id", id);
  button.classList.add("button-form");
  return button;
};

const createBr = () => {
  return document.createElement("br");
};

function createAddForm() {
  const form = document.createElement("form");
  form.setAttribute("id", "add-transaction-form");
  const nameLabel = createLabel("Nome: ", "add-name-input");
  const nameInput = createInput("text", "add-name-input", "name");
  const br1 = createBr();
  const br2 = createBr();
  const br3 = createBr();
  const br4 = createBr();
  const valueLabel = createLabel("Valor: ", "add-value-input");
  const valueInput = createInput("number", "add-value-input", "value");
  const radioCredit = createInput("radio", "edit-credit", "typeOfTransaction");
  const radioDebit = createInput("radio", "edit-debit", "typeOfTransaction");
  const labelCredit = createLabel("Creditar", "edit-credit");
  const labelDebit = createLabel("Debitar", "edit-debit");
  const submitBtn = createButton("Registrar", "submit", "submit-btn");
  form.append(
    nameLabel,
    nameInput,
    br1,
    br2,
    valueLabel,
    valueInput,
    br3,
    radioCredit,
    labelCredit,
    radioDebit,
    labelDebit,
    br4,
    submitBtn
  );
  const div = document.querySelector(".add-transaction-div");
  div.appendChild(form);
}

async function addResponseFunction(ev) {
  ev.preventDefault();

  let choice;
  const credit = document.getElementById("edit-credit");
  if (credit.checked) {
    choice = "credit";
  } else {
    choice = "debit";
  }

  const transactionData = {
    name: document.getElementById("add-name-input").value,
    value: parseFloat(document.getElementById("add-value-input").value),
    type: choice,
  };

  const response = await fetch("http://localhost:3000/transactions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transactionData),
  });
  const savedTransaction = await response.json();
  console.log(savedTransaction);
}

module.exports = {
  response: addResponseFunction,
  createForm: createAddForm,
};
