const body = document.querySelector("body");
const check = document.getElementById("check");
const toggleSwitch = document.querySelector('input[type="checkbox"]');
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);

  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
    document.body.classList.toggle("dark");
  }
}

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    document.body.classList.toggle("dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
    document.body.classList.toggle("dark");
  }
}

toggleSwitch.addEventListener("change", switchTheme, false);
