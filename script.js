let num1;
let operator;
let num2;

let value;

const btn = document.querySelectorAll(".btn");

const operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      add(num1, num2);
    case "-":
      subtract(num1, num2);
    case "*":
      multiply(num1, num2);
    case "/":
      divide(num1, num2);
  }
};

const add = (num1, num2) => {};

const subtract = (num1, num2) => {};

const multiply = (num1, num2) => {};

const divide = (num1, num2) => {};
