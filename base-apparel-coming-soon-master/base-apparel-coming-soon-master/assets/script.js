const email = document.getElementById("email");
const btn = document.getElementById("btn");
const form = document.getElementById("form");
const iconError = document.getElementById("img-error");
const spanError = document.getElementById("span-error");

// Email Validasyon Kontrol
const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!validateEmail(email.value)) {
    iconError.style.display = "block";
    spanError.style.display = "block";
  }
  email.value = "";
});
