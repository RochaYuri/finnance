const div = document.querySelector(".remove-transaction-div");

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

export const createRemoveForm = () => {
  const form = document.createElement("form");
  form.setAttribute("id", "remove-transaction-form");
  const transactionIdLabel = createLabel(
    "Nr. da Transação: ",
    "remove-transaction-id-input"
  );
  const transactionIdInput = createInput(
    "number",
    "remove-transaction-id-input",
    "transactonId"
  );
  transactionIdInput.setAttribute("required", "");
  const br1 = createBr();
  const br2 = createBr();
  const submitBtn = createButton("Remover", "submit", "submit-btn");
  form.append(transactionIdLabel, transactionIdInput, br1, br2, submitBtn);
  div.appendChild(form);
};

export async function removeTransactionResponse(ev) {
  const id = document.getElementById("remove-transaction-id-input").value;
  async function responseFunction() {
    const response = await fetch(`http://localhost:3000/transactions/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const removedTransaction = await response.json();
    console.log(removedTransaction);
  }
  responseFunction();
}
