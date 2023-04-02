const clearedItems = document.querySelector(".clear");
let userInput = document.querySelector("#numberInput");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");

let firstPart = "";
let operator = "";
let secondPart = "";

const handleNumberClick = (event) => {
  if (operator != "") {
    secondPart = event.target.innerText;
  } else if (operator == "") {
    firstPart = event.target.innerText;
  }
};
numbers.forEach((element) => {
  element.addEventListener("click", handleNumberClick);
});

const handleOperationClick = (event) => {
  operator = event.target.innerText;
  console.log(event.target.innerText);
};

operations.forEach((element) => {
  element.addEventListener("click", handleOperationClick);
});

const handleClearFunction = (event) => {
  event.target.firstPart = "";
  event.target.operator = "";
  event.target.partTwo = "";
};

clearedItems.forEach((element) => {
  element.addEventListener("click", handleClearFunction);
});
