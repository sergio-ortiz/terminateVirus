const oneTimeServiceTab = document.getElementById("one-time-service-tab");
const subscriptionsTab = document.getElementById("subscriptions-tab");
const oneTimeServiceTable = document.getElementById("one-time-service-table");
const subscriptionsTable = document.getElementById("subscriptions-table");
const subscriptionsInfo = document.getElementById("subscriptions-info");

function switchToOneTimeServiceTab() {
  oneTimeServiceTab.style.background = "#fff";
  subscriptionsTab.style.background = "#f4f4f4";
  subscriptionsInfo.style.display = "none";
  oneTimeServiceTable.style.display = "table";
  subscriptionsTable.style.display = "none";
  return;
}

function switchToSubscriptionsTab() {
  subscriptionsTab.style.background = "#fff";
  oneTimeServiceTab.style.background = "#f4f4f4";
  subscriptionsInfo.style.display = "block";
  subscriptionsTable.style.display = "table";
  oneTimeServiceTable.style.display = "none";
  return;
}

export default (function main() {
  oneTimeServiceTab.addEventListener("click", switchToOneTimeServiceTab);
  subscriptionsTab.addEventListener("click", switchToSubscriptionsTab);
})();
