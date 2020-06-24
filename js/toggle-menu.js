const menu = document.getElementById("menu");

let toggle = "off";

export default function toggleMenu() {
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
