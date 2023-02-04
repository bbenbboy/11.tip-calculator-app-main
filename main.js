"use strict";
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input");
const borderError = form.querySelector(".receive-num");
const textError = form.querySelectorAll(".error");

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

function validateInput(input) {
  if (input.value === "") {
    textError.classList.add("active");
    borderError.classList.add("active");
    return false;
  } else {
    textError.classList.remove("active");
    borderError.classList.remove("active");
    return true;
  }
}
validateInput(inputs);
