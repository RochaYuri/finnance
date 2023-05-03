import { createAddForm, addResponseFunction } from "../src/addTransaction.js";
import {
  createEditForm,
  editTransactionRepsonse,
} from "../src/editTransaction.js";
import {
  createRemoveForm,
  removeTransactionResponse,
} from "../src/removeTransaction.js";
import { showTransactions } from "../src/showTransactions.js";
import { getValues } from "../src/accountBalance.js";
import { switchTheme, preferedTheme } from "../src/switchTheme.js";

window.addEventListener("DOMContentLoaded", preferedTheme);

const addTransactionBtn = document.getElementById("add-transaction-btn");
const editTransactionBtn = document.getElementById("edit-transaction-btn");
const removeTransactionsBtn = document.getElementById("remove-transaction-btn");
const showTransactionsBtn = document.getElementById("show-transactions-btn");
const switchThemeBtn = document.getElementById("theme-switcher");

let indexAddTr = 1;
let indexShowTr = 1;
let indexEditTr = 1;
let indexRemoveTr = 1;

// Adição de transação
addTransactionBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (indexAddTr === 1) {
    indexAddTr = 2;
    createAddForm();
    const form = document.getElementById("add-transaction-form");
    form.addEventListener("submit", addResponseFunction);
    document.getElementById("add-name-input").value = "";
    document.getElementById("add-value-input").value = "";
  } else {
    document.getElementById("add-transaction-form").remove();
    indexAddTr = 1;
  }
});

// Edição de transação
editTransactionBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (indexEditTr === 1) {
    createEditForm();
    indexEditTr = 2;
    const form = document.getElementById("edit-transaction-form");
    form.addEventListener("submit", editTransactionRepsonse);
  } else {
    document.getElementById("edit-transaction-form").remove();
    indexEditTr = 1;
  }
});

// Remover transação
removeTransactionsBtn.addEventListener("click", (ev) => {
  ev.preventDefault();
  if (indexRemoveTr === 1) {
    indexRemoveTr = 2;
    createRemoveForm();
    const form = document.getElementById("remove-transaction-form");
    form.addEventListener("submit", removeTransactionResponse);
  } else {
    document.getElementById("remove-transaction-form").remove();
    indexRemoveTr = 1;
  }
});

// Mostrar todas as transações
showTransactionsBtn.addEventListener("click", (ev) => {
  if (indexShowTr === 1) {
    indexShowTr = 2;
    showTransactions();
  } else {
    document.getElementById("show-transactions-container").remove();
    document.querySelector(".sub").remove();
    indexShowTr = 1;
  }
});

switchThemeBtn.addEventListener("click", switchTheme);

getValues();
