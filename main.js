const display = document.querySelector(".display");
const numbBtns = document.querySelectorAll(".showOnDisplay");
const clearing = document.querySelector(".clearbtn");
const calculating = document.querySelector(".calculatebtn");
function calculate(event) {
  display.innerHTML = eval(display.innerHTML)
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
calculating.addEventListener("click", calculate);
clearing.addEventListener("click", clear);
numbBtns.forEach((element) => {
  element.addEventListener("click", clickHandler);
});
