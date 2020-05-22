let input = document.querySelector("input");
let inputErrorAlert = document.querySelector(".inputErrorAlert");
let inputWrapper = document.querySelector("#inputWrapper");
let btn = document.querySelector("#button");
let status = document.querySelector("#status");

btn.addEventListener("click", (event) => {
  btnClick(event);
});

const btnClick = (e) => {
  if (!validateEmail(input.value) && input.value) {
    status.style.display = "block";
    inputErrorAlert.style.display = "block";
    inputWrapper.classList.add("error");
  } else {
    status.style.display = "none";
    inputErrorAlert.style.display = "none";
    inputWrapper.classList.remove("error");
  }
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
