const msg = document.getElementById("message");

let initiallyClicked = false;

function clearInitialTextContent(e) {
  if (initiallyClicked === false) {
    e.target.textContent = "";
    initiallyClicked = true;
  }

  return;
}

export default (function main() {
  msg.addEventListener("click", clearInitialTextContent);
})();
