let displayDate = new Date();
document.getElementById("date").innerHTML = displayDate.toLocaleString();

// function openSlideMenu() {
//   // document.getElementById("side-menu").style.marginBottom = "150px";
//   document.getElementById("main").style.marginTop = "150px";
// }

let hiddenDiv = document.getElementById("hiddenDiv");
hiddenDiv.addEventListener("click", function(event) {
  event.target.style.marginBottom = "150px";
  event.target.style.textContent = "Hello";
});

// function closeSlideMenu() {
//   document.getElementById("side-menu").style.marginBottom = "0";
//   document.getElementById("").style.marginTop = "0";
// }

let signUp = document.getElementById("signUp");
signUp.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("signUpHidden").style.display = "block";
  document.querySelector(".signinbtn").style.display = "none";
});

let signIn = document.getElementById("signIn");
signIn.addEventListener("click", function(event) {
  event.preventDefault();
  document.getElementById("signUpHidden").style.display = "block";
  document.querySelector(".signupbtn").style.display = "none";
});
