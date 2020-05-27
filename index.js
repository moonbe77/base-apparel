let input = document.querySelector("input");
let inputIconAlert = document.querySelector(".input-icon_alert");
let inputWrapper = document.querySelector("#inputWrapper");
let btn = document.querySelector("#button");
let status = document.querySelector("#status");
let modelImg = document.querySelector("#model-img");
window.addEventListener("resize", changeImg);

btn.addEventListener("click", (event) => {
  btnClick(event);
});

const btnClick = (e) => {
  if (!validateEmail(input.value) && input.value) {
    status.style.display = "block";
    inputIconAlert.style.display = "block";
    input.classList.add("error");
  } else {
    status.style.display = "none";
    inputIconAlert.style.display = "none";
    input.classList.remove("error");
  }
};

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function changeImg(e) {
  let w = window.innerWidth;

  if (w < 931) {
    modelImg.src = "./images/hero-mobile.jpg";
  } else {
    modelImg.src = "./images/hero-desktop.jpg";
  }
}
changeImg();
