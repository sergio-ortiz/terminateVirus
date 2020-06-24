import toggleMenu from "./toggle-menu.js";

const hamburgerButton = document.getElementById("hamburger-btn");
const menuItems = document.getElementsByClassName("menu-item");

hamburgerButton.addEventListener("click", toggleMenu);

Object.values(menuItems).forEach((item) => {
  item.addEventListener("click", toggleMenu);
});
