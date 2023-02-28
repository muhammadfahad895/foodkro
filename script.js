const signInBtn = document.querySelector("#signIn");
const signUpBtn = document.querySelector("#signUp");
const signUpForm = document.querySelector("#signUpForm");
const signInForm = document.querySelector("#signInForm");
const container = document.querySelector(".container");
const userName = document.querySelector("#userName");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const getUserSignUp = document.querySelector("#getUserSignUp");
const getUserSignIn = document.querySelector("#getUserSignIn");
const _userName = document.querySelector("#_userName");
const userPass = document.querySelector("#userPass");
const adminLogin = document.querySelector("#adminLogin");
const getAdminSignIn = document.querySelector("#getAdminSignIn");
const adminPopUp = document.querySelector("#adminPopUp");
const body = document.querySelector("body");
const close = document.querySelector("#close");
const getAdminPass = document.querySelector("#getAdminPass");
const adminSignIn = document.querySelector("#adminSignIn");

const userData = JSON.parse(localStorage.getItem("userData")) || [];
let currData = JSON.parse(localStorage.getItem("currUser"));

let currUser;
let newUser;
let newEmail;
let newPass;
let adminPass = 123456;

userName.addEventListener("input", (el) => {
  newUser = el.target.value;
});

email.addEventListener("input", (el) => {
  newEmail = el.target.value;
});

password.addEventListener("input", (el) => {
  newPass = el.target.value;
});

getUserSignUp.addEventListener("click", () => {
  userData.push({
    userName: newUser,
    email: newEmail,
    password: newPass,
  });
  swal("Good job!", "wohooo SignUp Done!", "success");

  localStorage.setItem("userData", JSON.stringify(userData));
  userName.value = "";
  email.value = "";
  password.value = "";

  container.classList.remove("right-panel-active");
});

signUpBtn.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInBtn.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

signUpForm.addEventListener("submit", (e) => e.preventDefault());
signInForm.addEventListener("submit", (e) => e.preventDefault());

_userName.addEventListener("input", (el) => {
  currUser = userData.find((user) => user.userName === el.target.value);
});

adminLogin.addEventListener("click", () => {
  adminPopUp.classList.remove("hidden");
});

close.addEventListener("click", () => {
  adminPopUp.classList.add("hidden");
});

adminSignIn.addEventListener("click", () => {
  if (Number(getAdminPass.value) === adminPass) {
    location.href = "./admin-panel-pages/admin-dashboard.html";
  } else {
    getAdminPass.style.border = "2px solid red";
  }
});
