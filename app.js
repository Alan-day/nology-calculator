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

const handleNumberClick = (event) => {
  if (operator == " ") {
    userInput.innerHTML += event.target.innerText;
    firstPart += event.target.innerText;
    console.log(firstPart);
  } else if (operator != " ") {
    userInput.innerHTML += event.target.innerText;
    secondPart += event.target.innerText;
    console.log(secondPart);
  } else {
  }
};
// equal function
const handleEquals = (event) => {
  if (operator == "+") {
    userInput.innerHTML = parseInt(firstPart) + parseInt(secondPart);

    console.log(userInput.innerHTML);
  } else if (operator == "-") {
    userInput.innerHTML = parseInt(firstPart) - parseInt(secondPart);
  } else if (operator == "÷") {
    userInput.innerHTML = parseInt(firstPart) / parseInt(secondPart);
  } else if (operator == "x") {
    userInput.innerHTML = parseInt(firstPart) * parseInt(secondPart);
  } else if (operator == "%") {
    userInput.innerHTML = parseInt(firstPart) * 0.01 * parseInt(secondPart);
  } else {
  }
};
equals.addEventListener("click", handleEquals);

numbers.forEach((element) => {
  element.addEventListener("click", handleNumberClick);
});

//operation clicking
const handleOperationClick = (event) => {
  userInput.innerHTML += event.target.innerText;
  operator = event.target.innerText;
  console.log(operator);
};

operations.forEach((element) => {
  element.addEventListener("click", handleOperationClick);
});

//clear function
const handleClearFunction = (event) => {
  userInput.innerHTML = null;
  firstPart = " ";
  operator = " ";
  secondPart = " ";
};

clear.addEventListener("click", handleClearFunction);

/* const handleSignFunction = (event) => {
 if(secondPart == " ") {
    userInput.innerHTML == firstPart.concat(".")  
  } else if (firstPart != " "){
  userInput.innerHTML == secondPart.concat(".")  
}};


sign.addEventListener("click", handleSignFunction);
dot.addEventListener("click", handleDotFunction); 



*/
