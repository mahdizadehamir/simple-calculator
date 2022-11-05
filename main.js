const display = document.querySelector(".display");
const numbBtns = document.querySelectorAll(".showOnDisplay");
const clearing = document.querySelector(".clearbtn");
const calculating = document.querySelector(".calculatebtn");
const memoryPlus = document.querySelector(".memplus");
const memoryMinus = document.querySelector(".memminus");
const memoryRecall = document.querySelector(".memrecall");
let memory = 0;
function calculate() {
  display.innerText= eval(display.innerText);
}
function memrecallFunc() {
  display.innerHTML = memory;
}
function memplusFunc() {
  memory += +eval(display.innerHTML);
  
}
function memminusFunc() {
  memory -= +eval(display.innerHTML);
 
}
function showOnDisplay(event) {
  if (display.innerHTML === "0") {
    display.innerHTML = "";
  }
  display.innerHTML += event.target.innerText;
}
function clear() {
  memory = 0;
  display.innerHTML = "0";
}
memoryRecall.addEventListener("click", memrecallFunc);
memoryMinus.addEventListener("click", memminusFunc);
memoryPlus.addEventListener("click", memplusFunc);
calculating.addEventListener("click", calculate);
clearing.addEventListener("click", clear);
numbBtns.forEach((element) => {
  element.addEventListener("click", showOnDisplay);
});
