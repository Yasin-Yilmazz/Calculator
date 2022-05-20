"use strict";

const pad = document.querySelector(".main__buttons");

const btn1 = document.querySelector(".main__buttons--13");
const btn2 = document.querySelector(".main__buttons--14");
const btn3 = document.querySelector(".main__buttons--15");
const btn4 = document.querySelector(".main__buttons--9");
const btn5 = document.querySelector(".main__buttons--10");
const btn6 = document.querySelector(".main__buttons--11");
const btn7 = document.querySelector(".main__buttons--5");
const btn8 = document.querySelector(".main__buttons--6");
const btn9 = document.querySelector(".main__buttons--7");
const btn0 = document.querySelector(".main__buttons--17");

const btnPlus = document.querySelector(".main__buttons--16");
const btnMinus = document.querySelector(".main__buttons--12");
const btnMultiply = document.querySelector(".main__buttons--8");
const btnDivide = document.querySelector(".main__buttons--4");
const btnEqual = document.querySelector(".main__buttons--19");

const btnClear = document.querySelector(".main__buttons--1");
const btnNegative = document.querySelector(".main__buttons--2");
const btnModulus = document.querySelector(".main__buttons--3");

const entry = document.querySelector(".main__screen__input--entry");
const result = document.querySelector(".main__screen__output--result");
const op = document.querySelector(".main__screen__input--op");

let firstNum = 0;
let secondNum = 0;
let isFirstNum = true;
let isSecondNum = false;
let operator = "";
let dotDone = false;
const checkLength = function () {
  if (entry.textContent.length > 10) {
    entry.textContent = entry.textContent.slice(0, 10);
  }
  document.querySelector(".main__screen__output").classList.add("hidden");
  document.querySelector(".main__screen__input").classList.remove("hidden");
};
const display = function () {
  document.querySelector(".main__screen__output").classList.remove("hidden");
  document.querySelector(".main__screen__input").classList.add("hidden");
};
const setDefaults = function () {
  firstNum = 0;
  secondNum = 0;
  operator = "";
  entry.textContent = "";
  result.textContent = "";
  op.textContent = "";
  isFirstNum = true;
  isSecondNum = false;
  dotDone = false;
  document.querySelector(".main__screen__output").classList.add("hidden");
  document.querySelector(".main__screen__input").classList.remove("hidden");
};

pad.addEventListener("click", (e) => {
  if (e.target.classList.contains("main__buttons--13")) {
    entry.textContent += "1";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--14")) {
    entry.textContent += "2";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--15")) {
    entry.textContent += "3";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--9")) {
    entry.textContent += "4";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--10")) {
    entry.textContent += "5";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--11")) {
    entry.textContent += "6";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--5")) {
    entry.textContent += "7";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--6")) {
    entry.textContent += "8";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--7")) {
    entry.textContent += "9";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--17")) {
    entry.textContent += "0";
    checkLength();
  } else if (e.target.classList.contains("main__buttons--18")) {
    !dotDone ? (entry.textContent += ".") : dotDone;
    dotDone = true;
  }
  //* toplama
  else if (e.target.classList.contains("main__buttons--16")) {
    operator = "+";
    op.textContent = "+";
    dotDone = false;
    if (
      (firstNum || firstNum === 0) &&
      (entry.textContent || entry.textContent === 0)
    ) {
      result.textContent = firstNum = +entry.textContent;
      display();
      entry.textContent = "";
    } else if (isFirstNum && !isSecondNum) {
      firstNum = +entry.textContent;
      entry.textContent = "";
      result.textContent = firstNum;
      isFirstNum = false;
      isSecondNum = true;
    } else if (!isFirstNum && isSecondNum) {
      secondNum = +entry.textContent;
      entry.textContent = "";
      result.textContent = firstNum = firstNum + secondNum;
      display();
    }

    //* Çıkarma
  } else if (e.target.classList.contains("main__buttons--12")) {
    operator = "-";
    op.textContent = "-";
    dotDone = false;
    if (
      (firstNum || firstNum === 0) &&
      (entry.textContent || entry.textContent === 0)
    ) {
      result.textContent = firstNum = +entry.textContent;
      entry.textContent = "";
      display();
    } else if (isFirstNum && !isSecondNum) {
      operator = "-";
      firstNum = +entry.textContent;
      entry.textContent = "";
      result.textContent = firstNum;
      isFirstNum = false;
      isSecondNum = true;
    } else if (!isFirstNum && isSecondNum) {
      secondNum = +entry.textContent;
      entry.textContent = "";
      result.textContent = firstNum = firstNum - secondNum;
      display();
    }
  }
  //* Çarpma
  else if (e.target.classList.contains("main__buttons--8")) {
    operator = "*";
    op.textContent = "x";
    dotDone = false;
    if (
      (firstNum || firstNum === 0) &&
      (entry.textContent || entry.textContent === 0)
    ) {
      result.textContent = firstNum = +entry.textContent;
      entry.textContent = "";
      display();
    } else if (isFirstNum && !isSecondNum) {
      operator = "*";
      firstNum = +entry.textContent;
      entry.textContent = "";
      result.textContent = firstNum;
      isFirstNum = false;
      isSecondNum = true;
    } else if (!isFirstNum && isSecondNum) {
      secondNum = +entry.textContent;
      entry.textContent = "";
      result.textContent = firstNum = firstNum * (secondNum ? secondNum : 1);
      display();
    }
  }
  //* Bölme
  else if (e.target.classList.contains("main__buttons--4")) {
    operator = "/";
    op.textContent = "÷";
    dotDone = false;
    if (
      (firstNum || firstNum === 0) &&
      (entry.textContent || entry.textContent === 0)
    ) {
      result.textContent = firstNum = +entry.textContent;
      entry.textContent = "";
      display();
    } else if (isFirstNum && !isSecondNum) {
      operator = "/";
      firstNum = +entry.textContent;
      entry.textContent = "";
      result.textContent = firstNum;
      isFirstNum = false;
      isSecondNum = true;
    } else if (!isFirstNum && isSecondNum) {
      secondNum = +entry.textContent;
      entry.textContent = "";
      result.textContent = firstNum = firstNum / (secondNum ? secondNum : 1);
      display();
    }

    //* Eşittir
  } else if (e.target.classList.contains("main__buttons--19")) {
    entry.textContent === 0 || entry.textContent
      ? (secondNum = +entry.textContent)
      : secondNum;
    entry.textContent = "";
    dotDone = false;
    if (operator === "+") {
      result.textContent = firstNum = firstNum + secondNum;
    } else if (operator === "-") {
      result.textContent = firstNum = firstNum - secondNum;
    } else if (operator === "*") {
      result.textContent = firstNum = firstNum * secondNum;
    } else if (operator === "/") {
      result.textContent = firstNum = firstNum / secondNum;
    }
    display();
  }
  //* Clear
  else if (e.target.classList.contains("main__buttons--1")) {
    setDefaults();
  }
  //* Minus
  else if (e.target.classList.contains("main__buttons--2")) {
    console.log("clicked");
    entry.textContent
      ? (entry.textContent = -1 * +entry.textContent)
      : result.textContent
      ? (result.textContent = -1 * +result.textContent)
      : result;
  }

  //* modulus
  else if (e.target.classList.contains("main__buttons--3")) {
    console.log("clicked");
  }
});
setDefaults();
