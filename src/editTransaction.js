const div = document.querySelector(".edit-transaction-div");

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

export const createEditForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "edit-transaction-form");
  const transactionIdLabel = createLabel(
    "Nr. da Transação: ",
    "edit-transaction-id-input"
  );
  const transactionIdInput = createInput(
    "number",
    "edit-transaction-id-input",
    "transactonId"
  );
  transactionIdInput.setAttribute("required", "");
  const br1 = createBr();
  const br2 = createBr();
  const br3 = createBr();
  const br4 = createBr();
  const br5 = createBr();
  const br6 = createBr();
  const nameLabel = createLabel("Nome: ", "edit-name-input");
  const nameInput = createInput("text", "edit-name-input", "name");
  const valueLabel = createLabel("Valor: ", "edit-value-input");
  const valueInput = createInput("number", "edit-value-input", "value");
  const radioCredit = createInput("radio", "edit-credit", "typeOfTransaction");
  const radioDebit = createInput("radio", "edit-debit", "typeOfTransaction");
  const labelCredit = createLabel("Creditar", "edit-credit");
  const labelDebit = createLabel("Debitar", "edit-debit");
  const submitBtn = createButton("Editar", "submit", "submit-btn");
  form.append(
    transactionIdLabel,
    transactionIdInput,
    br1,
    br2,
    nameLabel,
    nameInput,
    br3,
    br4,
    valueLabel,
    valueInput,
    br5,
    radioCredit,
    labelCredit,
    radioDebit,
    labelDebit,
    br6,
    submitBtn
  );
  div.appendChild(form);
};

export async function editTransactionRepsonse(ev) {
  ev.preventDefault();
  const id = document.getElementById("edit-transaction-id-input").value;
  const newName = document.getElementById("edit-name-input").value;
  const newValue = parseFloat(
    document.getElementById("edit-value-input").value
  );

  let choice;
  const credit = document.getElementById("edit-credit");
  if (credit.checked) {
    choice = "credit";
  } else {
    choice = "debit";
  }

  const editTransactionData = {
    name: newName,
    value: newValue,
    type: choice,
  };

  async function responseFunction() {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(editTransactionData),
    });
    const editedTransaction = await response.json();
    console.log(editedTransaction);
  }
}
