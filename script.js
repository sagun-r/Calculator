const add = (num1, num2) => {
  let result = num1 + num2;
  if (result % 1 != 0) {
    return Math.fround(result).toFixed(3);
  } else {
    return result;
  }
};
const subtract = (num1, num2) => {
  let result = num1 - num2;
  if (result % 1 != 0) {
    return Math.fround(result).toFixed(3);
  } else {
    return result;
  }
};

const multiply = (num1, num2) => {
  let result = num1 * num2;
  if (result % 1 != 0) {
    return Math.fround(result).toFixed(3);
  } else {
    return result;
  }
};

const divide = (num1, num2) => {
  if (num2 == 0) {
    alert("You cannot divide by 0");
    clearBtn.click();
  } else {
    let result = num1 / num2;
    if (result % 1 != 0) {
      return Math.fround(result).toFixed(3);
    } else {
      return result;
    }
  }
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
      return (textbox.value = add(Number(num1), Number(num2)));
    case "-":
      return (textbox.value = subtract(Number(num1), Number(num2)));
    case "*":
      return (textbox.value = multiply(Number(num1), Number(num2)));
    case "/":
      return (textbox.value = divide(Number(num1), Number(num2)));
  }
};

btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    textbox.value += btn.textContent;
  });
});

operBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (counter == 0) {
      counter++;
      textbox.value += ` ${btn.textContent} `;
    } else {
      equalBtn.click();
      if (num2 != "") {
        textbox.value = `${textbox.value} ${btn.textContent} `;
      }
    }
  });
});

equalBtn.addEventListener("click", () => {
  let display = textbox.value;
  const array = display.split(" ");
  num1 = array[0];
  operator = array[1];
  num2 = array[2];
  if (num2 != "") {
    operate(num1, operator, num2);
  }
});

clearBtn.addEventListener("click", () => {
  textbox.value = "";
  num1 = 0;
  num2 = 0;
  operator = "";
  counter = 0;
});
