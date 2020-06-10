const hamburgerButton = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");

let toggle = "off";

hamburgerButton.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (toggle === "off") {
    toggle = "on";
    menu.style.display = "block";
    return;
  }

  if (toggle === "on") {
    toggle = "off";
    menu.style.display = "none";
    return;
  }
}
