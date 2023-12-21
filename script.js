const add = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 + num2;
};
const subtract = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 - num2;
};

const multiply = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 * num2;
};

const divide = (num1, num2) => {
  num1 = Number(num1);
  num2 = Number(num2);
  return num1 / num2;
};

let counter = 0;

const textbox = document.querySelector(".textbox");
const btn = document.querySelectorAll(".btn");
const operBtn = document.querySelectorAll(".operBtn");
const equalBtn = document.querySelector(".equalBtn");
const clearBtn = document.querySelector(".clearBtn");

let num1, operator, num2;

const operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return (textbox.value = add(num1, num2));
    case "-":
      return (textbox.value = subtract(num1, num2));
    case "*":
      return (textbox.value = multiply(num1, num2));
    case "/":
      return (textbox.value = divide(num1, num2));
  }
};

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    textbox.value += btn.textContent;
  });
});

operBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    textbox.value += ` ${btn.textContent} `;
  });
});

equalBtn.addEventListener("click", () => {
  let display = textbox.value;
  const array = display.split(" ");
  num1 = array[0];
  operator = array[1];
  num2 = array[2];
  operate(num1, operator, num2);
});

clearBtn.addEventListener("click", () => {
  textbox.value = "";
  num1 = 0;
  num2 = 0;
  operator = "";
});
