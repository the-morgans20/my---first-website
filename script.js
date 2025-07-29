const signUpButton = document.getElementById("signUpButton");
const signInButton = document.getElementById("signUpButton");
const signUpform = document.getElementById("signUpform");
const signInform = document.getElementById("signInform");

signUpButton.addEventListener("click", function () {
  signInform.style.display = "none";
  signUpform.style.display = "block";
});
