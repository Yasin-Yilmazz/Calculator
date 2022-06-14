let containerDiv = document.querySelector(".container");
const emptyBottom = document.querySelector(".empty__bottom");
const emptyTop = document.querySelector(".empty__top");

// VARIABLES
let currOperand = "";
let previousOperand = "";
let operation = "";
let equalOrPercentPressed = false;

// EVENT LISTENER FOR ALL BUTTONS
containerDiv.addEventListener("click", (e) => {
  // NUMBERS
  if (e.target.classList.contains("nums")) {
    appendNumber(e.target.textContent);
    updateDisplay();
  }

  //   CLEAR BUTTON
  else if (e.target.classList.contains("box__ac")) {
    previousOperand = "";
    currOperand = "";
    operation = "";
    updateDisplay();
  }

  //   OPERATORS
  else if (e.target.classList.contains("op")) {
    chooseOperator(e.target.textContent);
    updateDisplay();
  }

  // Equal Button
  if (e.target.classList.contains("box__equels")) {
    calculate();
    updateDisplay();
    equalOrPercentPressed = true;
  }

  // -+ BUTTON
  if (e.target.classList.contains("box__plus-minus")) {
    if (!currOperand) return;
    currOperand *= -1;
    updateDisplay();
  }
  // PERCENT
  if (e.target.classList.contains("box__percent")) {
    if (!currOperand) return;
    currOperand = currOperand / 100;
    updateDisplay();
    equalOrPercentPressed = true;
  }
});

const appendNumber = (num) => {
  // if there is 0 before and try to enter another return
  if (currOperand === "0" && num === "0") return;

  // if first number 0 and then another number entered fix it like: 09 => 9 , 03 => 3 , 0.1 => 0.1
  if (currOperand === "0" && num !== ".") {
    currOperand = num;
    return;
  }

  // if current number . and previous number has . before return
  if (num === "." && currOperand.includes(".")) return;

  if (currOperand.length > 10) return;

  if (equalOrPercentPressed) {
    currOperand = num;
    equalOrPercentPressed = false;
    return;
  }
  // concat the entered numbers
  currOperand += num;
};

const updateDisplay = () => {
  // if numbers length bigger than 11 digit convert it to exponential
  if (currOperand.toString().length > 11) {
    currOperand = Number(currOperand).toExponential(3);
  }
  // update displays
  emptyBottom.textContent = currOperand;
  emptyTop.textContent = `${previousOperand} ${operation}`;
};

const chooseOperator = (op) => {
  // when the first number entered perform the operations
  if (previousOperand) {
    calculate();
  }

  // operator swapping
  operation = op;
  previousOperand = currOperand;
  currOperand = "";
};

const calculate = () => {
  let calculation = 0;

  const prev = Number(previousOperand);
  const current = Number(currOperand);

  switch (operation) {
    case "+":
      calculation = prev + current;
      break;
    case "-":
      calculation = prev - current;
      break;
    case "x":
      calculation = prev * current;
      break;
    case "÷":
      calculation = prev / current;
      break;
    default:
      return;
  }

  currOperand = calculation;

  //? we have to clean previousOperand and operation to run the equal button
  previousOperand = "";
  operation = "";
};
