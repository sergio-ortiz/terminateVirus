const oneTimeServiceTab = document.getElementById("one-time-service-tab");
const subscriptionsTab = document.getElementById("subscriptions-tab");

function switchToOneTimeServiceTab() {
  oneTimeServiceTab.style.background = "#fff";
  subscriptionsTab.style.background = "#f4f4f4";
  return;
}

function switchToSubscriptionsTab() {
  subscriptionsTab.style.background = "#fff";
  oneTimeServiceTab.style.background = "#f4f4f4";
  return;
}

export default (function main() {
  oneTimeServiceTab.addEventListener("click", switchToOneTimeServiceTab);
  subscriptionsTab.addEventListener("click", switchToSubscriptionsTab);
})();
