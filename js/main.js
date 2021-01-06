import "./toggle-menu.js";
import "./tab-switch.js";
import "./clear-message.js";
import { main as carousel } from "./carousel.js";

const imageElement = document.getElementById("image-element");
const imageSourceArray = [
  "./assets/1.png",
  "./assets/2.png",
  "./assets/3.png",
  "./assets/4.png",
  "./assets/5.png",
  "./assets/6.png",
  "./assets/7.png",
  "./assets/8.png",
  "./assets/9.png",
  "./assets/10.png",
  "./assets/11.png",
  "./assets/12.png",
  "./assets/13.png",
  "./assets/14.png",
  "./assets/15.png",
  "./assets/16.png",
];

carousel(imageElement, imageSourceArray);
