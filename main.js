const display = document.querySelector(".display");
const numbBtns = document.querySelectorAll(".showOnDisplay");
const clearing = document.querySelector(".clearbtn");
const calculating = document.querySelector(".calculatebtn");
const memoryPlus = document.querySelector(".memplus");
const memoryRecall = document.querySelector(".memrecall");
let memory = 0;
function calculate() {
  display.innerHTML = eval(display.innerHTML);
}
function memrecallFunc() {
  display.innerHTML = memory;
}
function memplusFunc() {
  memory += +eval(display.innerHTML);
  display.innerHTML = "";
}
function clickHandler(event) {
  if (display.innerHTML === "0") {
    display.innerHTML = "";
  }
  display.innerHTML += event.target.innerText;
}
function clear() {
  display.innerHTML = "0";
}
memoryRecall.addEventListener("click", memrecallFunc);
memoryPlus.addEventListener("click", memplusFunc);
calculating.addEventListener("click", calculate);
clearing.addEventListener("click", clear);
numbBtns.forEach((element) => {
  element.addEventListener("click", clickHandler);
});
