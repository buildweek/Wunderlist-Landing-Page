let displayDate = new Date();
document.getElementById("date").innerHTML = displayDate.toLocaleString();

function openSlideMenu() {
  document.getElementById("side-menu").style.width = "150px";
  document.getElementById("main").style.marginLeft = "150px";
}

function closeSlideMenu() {
  document.getElementById("side-menu").style.width = "0";
  document.getElementById("").style.marginLeft = "0";
}
