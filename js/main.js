const hamburgerButton = document.getElementById("hamburger-btn");
const menu = document.getElementById("menu");
const menuItems = document.getElementsByClassName("menu-item");

let toggle = "off";

Object.values(menuItems).forEach((item) => {
  item.addEventListener("click", toggleMenu);
});

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
