const root = document.querySelector(":root");

export function switchTheme() {
  if (body.dataset.theme === "light") {
    root.style.setProperty("--background-color", "#202020");
    root.style.setProperty("--nav-title-color", "#50b34d");
    root.style.setProperty("--nav-button-text-color", "#d6d6d6");
    root.style.setProperty("--nav-button-text-color-hover", "#434443");
    root.style.setProperty("--main-button-background-color", "#075704");
    root.style.setProperty("--main-button-text-color", "#bcc2bc");
    root.style.setProperty("--main-button-text-color-hover", "#50b34d");
    root.style.setProperty("--form-button-background-color", "#bcc2bc");
    root.style.setProperty("--form-button-background-color-hover", "#bcc2bc");
    root.style.setProperty("--form-button-text-color", "#1e531c");
    root.style.setProperty("--form-button-text-color-hover", "#bcc2bc");
    root.style.setProperty("--label-form", "#bcc2bc");
    root.style.setProperty("--transaction-data-text", "#fff");
    root.style.setProperty("--sub-text", "#fff");
    root.style.setProperty("--credit-transaction-border", "#429c17");
    root.style.setProperty("--debit-transaction-border", "#ce1414");
    root.style.setProperty("--positive-balance", "#429c17");
    root.style.setProperty("--neutral-balance", "#999b31");
    root.style.setProperty("--negative-balance", "#ce1414");
    root.style.setProperty("--footer-text-color", "#e7e7e7");
    root.style.setProperty("--footer-link-text-color", "#e7e7e7");
    root.style.setProperty("--footer-link-text-color-hover", "#15e7e7");
    body.dataset.theme = "dark";
    localStorage.setItem("preferedTheme", "dark");
  } else {
    root.style.setProperty("--background-color", "#a5c79c");
    root.style.setProperty("--nav-title-color", "#202220");
    root.style.setProperty("--nav-button-text-color", "#242323");
    root.style.setProperty("--nav-button-text-color-hover", "#464b46");
    root.style.setProperty("--main-button-background-color", "#075704");
    root.style.setProperty("--main-button-text-color", "#bcc2bc");
    root.style.setProperty("--main-button-text-color-hover", "#075704");
    root.style.setProperty("--form-button-background-color", "#3a3939");
    root.style.setProperty("--form-button-background-color-hover", "#bcc2bc");
    root.style.setProperty("--form-button-text-color", "#73d470");
    root.style.setProperty("--form-button-text-color-hover", "#3a3939");
    root.style.setProperty("--label-form", "#262726");
    root.style.setProperty("--transaction-data-text", "#191a19");
    root.style.setProperty("--sub-text", "#000");
    root.style.setProperty("--credit-transaction-border", "#429c17");
    root.style.setProperty("--debit-transaction-border", "#ce1414");
    root.style.setProperty("--positive-balance", "#429c17");
    root.style.setProperty("--neutral-balance", "#999b31");
    root.style.setProperty("--negative-balance", "#ce1414");
    root.style.setProperty("--footer-text-color", "#e7e7e7");
    root.style.setProperty("--footer-link-text-color", "#e7e7e7");
    root.style.setProperty("--footer-link-text-color-hover", "#15e7e7");
    body.dataset.theme = "light";
    localStorage.setItem("preferedTheme", "light");
  }
}

export function preferedTheme() {
  const local = localStorage.getItem("preferedTheme");
  if (local === "light") {
    root.style.setProperty("--background-color", "#a5c79c");
    root.style.setProperty("--nav-title-color", "#202220");
    root.style.setProperty("--nav-button-text-color", "#242323");
    root.style.setProperty("--nav-button-text-color-hover", "#464b46");
    root.style.setProperty("--main-button-background-color", "#075704");
    root.style.setProperty("--main-button-text-color", "#bcc2bc");
    root.style.setProperty("--main-button-text-color-hover", "#075704");
    root.style.setProperty("--form-button-background-color", "#3a3939");
    root.style.setProperty("--form-button-background-color-hover", "#bcc2bc");
    root.style.setProperty("--form-button-text-color", "#73d470");
    root.style.setProperty("--form-button-text-color-hover", "#3a3939");
    root.style.setProperty("--label-form", "#262726");
    root.style.setProperty("--transaction-data-text", "#191a19");
    root.style.setProperty("--sub-text", "#000");
    root.style.setProperty("--credit-transaction-border", "#429c17");
    root.style.setProperty("--debit-transaction-border", "#ce1414");
    root.style.setProperty("--positive-balance", "#429c17");
    root.style.setProperty("--neutral-balance", "#999b31");
    root.style.setProperty("--negative-balance", "#ce1414");
    root.style.setProperty("--footer-text-color", "#e7e7e7");
    root.style.setProperty("--footer-link-text-color", "#e7e7e7");
    root.style.setProperty("--footer-link-text-color-hover", "#15e7e7");
  } else {
    root.style.setProperty("--background-color", "#202020");
    root.style.setProperty("--nav-title-color", "#50b34d");
    root.style.setProperty("--nav-button-text-color", "#d6d6d6");
    root.style.setProperty("--nav-button-text-color-hover", "#434443");
    root.style.setProperty("--main-button-background-color", "#075704");
    root.style.setProperty("--main-button-text-color", "#bcc2bc");
    root.style.setProperty("--main-button-text-color-hover", "#50b34d");
    root.style.setProperty("--form-button-background-color", "#bcc2bc");
    root.style.setProperty("--form-button-background-color-hover", "#bcc2bc");
    root.style.setProperty("--form-button-text-color", "#1e531c");
    root.style.setProperty("--form-button-text-color-hover", "#bcc2bc");
    root.style.setProperty("--label-form", "#bcc2bc");
    root.style.setProperty("--transaction-data-text", "#fff");
    root.style.setProperty("--sub-text", "#fff");
    root.style.setProperty("--credit-transaction-border", "#429c17");
    root.style.setProperty("--debit-transaction-border", "#ce1414");
    root.style.setProperty("--positive-balance", "#429c17");
    root.style.setProperty("--neutral-balance", "#999b31");
    root.style.setProperty("--negative-balance", "#ce1414");
    root.style.setProperty("--footer-text-color", "#e7e7e7");
    root.style.setProperty("--footer-link-text-color", "#e7e7e7");
    root.style.setProperty("--footer-link-text-color-hover", "#15e7e7");
  }
}
