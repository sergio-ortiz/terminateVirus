const menu = document.getElementById("menu");
const hamburgerButton = document.getElementById("hamburger-btn");
const menuItems = document.getElementsByClassName("menu-item");

let toggle = "off";

function toggleMenu() {
  if (window.innerWidth < 769) {
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
}

export default (function main() {
  hamburgerButton.addEventListener("click", toggleMenu);

  Object.values(menuItems).forEach((item) => {
    item.addEventListener("click", toggleMenu);
  });
})();
