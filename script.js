let num1 = 0,
  operator = null,
  num2 = 0,
  hasOper = false,
  hasDec = false;

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
  let result = num1 / num2;
  if (result % 1 != 0) {
    return Math.fround(result).toFixed(3);
  } else {
    return result;
  }
};

const textbox = document.querySelector(".textbox");
const btn = document.querySelectorAll(".btn");
const operBtn = document.querySelectorAll(".operBtn");
const equalBtn = document.querySelector(".equalBtn");
const clearBtn = document.querySelector(".clearBtn");
const decimalBtn = document.querySelector(".decimalBtn");
const deleteBtn = document.querySelector(".deleteBtn");

//calls function depending on operator used
const operate = (num1, operator, num2) => {
  switch (operator) {
    case "+":
      return (textbox.value = add(Number(num1), Number(num2)));
    case "-":
      return (textbox.value = subtract(Number(num1), Number(num2)));
    case "×":
      return (textbox.value = multiply(Number(num1), Number(num2)));
    case "÷":
      if (num2 == 0) {
        clearBtn.click();
        return alert("You cannot divide by 0");
      } else {
        return (textbox.value = divide(Number(num1), Number(num2)));
      }
  }
};

document.addEventListener("keydown", (e) => {
  console.log(e.key);
  if (e.key <= 9 && e.key >= 0) {
    textbox.value += e.key;
  } else if (e.key == "+" || e.key == "-" || e.key == "*" || e.key == "/") {
    if (hasOper == false) {
      if (textbox.value != "") {
        hasOper = true;
        if (e.key == "/") {
          textbox.value += ` ÷ `;
        } else if (e.key == "*") {
          textbox.value += ` × `;
        } else textbox.value += ` ${e.key} `;
      }
    }
  } else if (e.key == "=" || e.key == "Enter") {
    e.preventDefault();
    equalBtn.click();
    hasOper = false;
  } else if (e.key == "Backspace") {
    deleteBtn.click();
  } else if (e.key == ".") {
    decimalBtn.click();
  }
});

//adds eventlistener to display all number button pressed
btn.forEach((btn) => {
  btn.addEventListener("click", () => {
    textbox.value += btn.textContent;
  });
});

//adds eventlistner to all operator buttons
operBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    //checks if operator button has already been pressed
    if (hasOper == false) {
      if (textbox.value != "") {
        hasDec = false;
        hasOper = true;
        textbox.value += ` ${btn.textContent} `;
      }
    } else {
      equalBtn.click();
      hasDec = false;
      if (num2 != "") {
        textbox.value = `${textbox.value} ${btn.textContent} `;
      }
    }
  });
});

//adds eventlistner to the equal button
equalBtn.addEventListener("click", () => {
  hasDec = false;
  let display = textbox.value;
  const array = display.split(" ");
  num1 = array[0];
  operator = array[1];
  num2 = array[2];
  //checks if there is second number
  if (num2 != "") {
    operate(num1, operator, num2);
  }
});

decimalBtn.addEventListener("click", () => {
  if (hasDec == false) {
    textbox.value += ".";
    hasDec = true;
  }
});

//enables way to delete numbers until empty string
deleteBtn.addEventListener("click", () => {
  let txt = textbox.value;
  //checks if character is empty
  if (txt.charAt(txt.length - 1) != " ") {
    let deleted = txt.slice(0, -1);
    textbox.value = deleted;
  }
});

//adds eventlistner to clear button and sets variables to when pressed default
clearBtn.addEventListener("click", () => {
  textbox.value = "";
  num1 = 0;
  num2 = 0;
  operator = null;
  hasOper = false;
  hasDec = false;
});
