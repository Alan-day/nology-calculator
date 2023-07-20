const clearedItems = document.querySelector(".clear");
let userInput = document.querySelector("#numberInput");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals");
const clear = document.querySelector(".clear");
const sign = document.querySelector(".sign");
const dot = document.querySelector(".dot");

let firstPart = " ";
let operator = " ";
let secondPart = " ";
let product = " ";
let isDecimal = false;

const handleNumberClick = (event) => {
  if (operator === " ") {
    userInput.innerHTML += event.target.innerText;
    firstPart += event.target.innerText;
  } else {
    userInput.innerHTML += event.target.innerText;
    secondPart += event.target.innerText;
  }
};

const handleEquals = (event) => {
  if (operator === "+") {
    userInput.innerHTML = parseFloat(firstPart) + parseFloat(secondPart);
  } else if (operator === "-") {
    userInput.innerHTML = parseFloat(firstPart) - parseFloat(secondPart);
  } else if (operator === "÷") {
    userInput.innerHTML = parseFloat(firstPart) / parseFloat(secondPart);
  } else if (operator === "x") {
    userInput.innerHTML = parseFloat(firstPart) * parseFloat(secondPart);
  } else if (operator === "%") {
    userInput.innerHTML = parseFloat(firstPart) * 0.01 * parseFloat(secondPart);
  }

  // Reset calculator state after calculation
  firstPart = userInput.innerHTML;
  operator = " ";
  secondPart = "";
  isDecimal = false;
};

const handleOperationClick = (event) => {
  userInput.innerHTML += event.target.innerText;
  operator = event.target.innerText;
};

const handleClearFunction = (event) => {
  userInput.innerHTML = null;
  firstPart = " ";
  operator = " ";
  secondPart = " ";
  isDecimal = false;
};

const handleSign = (event) => {
  if (operator === " ") {
    if (firstPart.includes(".")) {
      firstPart = (-1 * parseFloat(firstPart)).toString();
    } else {
      firstPart = (-1 * parseInt(firstPart)).toString();
    }
    userInput.innerHTML = firstPart;
  } else {
    if (secondPart.includes(".")) {
      secondPart = (-1 * parseFloat(secondPart)).toString();
    } else {
      secondPart = (-1 * parseInt(secondPart)).toString();
    }
    userInput.innerHTML = firstPart + operator + secondPart;
  }
};

const handleDotFunction = (event) => {
  if (!isDecimal) {
    userInput.innerHTML += event.target.innerText;
    if (operator === " ") {
      firstPart += event.target.innerText;
    } else {
      secondPart += event.target.innerText;
    }
    isDecimal = true;
  }
};

// Event listeners
numbers.forEach((element) => {
  element.addEventListener("click", handleNumberClick);
});

operations.forEach((element) => {
  element.addEventListener("click", handleOperationClick);
});

equals.addEventListener("click", handleEquals);
clear.addEventListener("click", handleClearFunction);
sign.addEventListener("click", handleSign);
dot.addEventListener("click", handleDotFunction); 
