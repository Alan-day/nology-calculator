const clearedItems = document.querySelector(".clear");
let userInput = document.querySelector("#numberInput");
const numbers = document.querySelectorAll(".number");
const operations = document.querySelectorAll(".operation");
const equals = document.querySelector("#equals");
const clear = document.querySelector(".clear");

let firstPart = " ";
let operator = " ";
let secondPart = " ";
let product = "";

/*const calculate=(numbers)=> {
const value = numbers.textContent
calculation.push(value)
totalCalculation =calculate.join('')
userInput.textContent = totalCalculation
console.log(ca);
}
*/

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
    console.log(userInput.innerHTML);
  } else if (operator == "÷") {
    userInput.innerHTML = parseInt(firstPart) / parseInt(secondPart);

    console.log(userInput.innerHTML);
  } else if (operator == "x") {
    userInput.innerHTML = parseInt(firstPart) * parseInt(secondPart);

    console.log(userInput.innerHTML);
  } else if (operator == "%") {
    userInput.innerHTML = parseInt(firstPart) * 0.01 * parseInt(secondPart);
    console.log(userInput.innerHTML);
  }
};
equals.addEventListener("click", handleEquals);
/*
  
  
let calculation = [];
let totalCalculation;


  
  
  if (operator != "") {
    secondPart = event.target.innerText;
  } else if (operator == "") {
    firstPart = event.target.innerText;
  }*/

numbers.forEach((element) => {
  element.addEventListener("click", handleNumberClick);
});

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
