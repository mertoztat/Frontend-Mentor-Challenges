const body = document.querySelector("body");
const check = document.getElementById("check");

check.addEventListener("change", () => {
  document.body.classList.toggle("dark");
});
