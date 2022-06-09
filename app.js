let containerDiv = document.querySelector(".container");
const emptyBottom = document.querySelector(".empty__bottom");
const emptyTop = document.querySelector(".empty__top");
const numbers = document.querySelector("buttons");

// VARIABLES
let operator;

containerDiv.addEventListener("click", (e) => {
  // NUMBERS
  if (e.target.classList.contains("nums")) {
    if (e.target.classList.contains("box")) {
      if (emptyBottom.innerText === "0" && e.target.innerText !== "0") {
        emptyBottom.innerText = e.target.innerText;
      } else {
        emptyBottom.innerText += e.target.innerText;
      }
    }
  }
  //   CLEAR BUTTON
  else if (e.target.classList.contains("box__ac")) {
    emptyBottom.innerHTML = "0";
    emptyTop.innerHTML = "";
  }
  //   OPERATORS
  else if (e.target.classList.contains("op")) {
    if (e.target.classList.contains("op")) {
      operator = e.target.innerText;
      emptyTop.innerText = emptyBottom.innerText + " " + operator;
      emptyBottom.innerText = "0";
    }
  }
  // CALCULATION

  if (e.target.classList.contains("box__equels")) {
    switch (operator) {
      case "+":
        emptyBottom.innerText =
          Number(emptyTop.innerText.slice(0, -1)) +
          Number(emptyBottom.innerText);
        break;
      case "-":
        emptyBottom.innerText =
          Number(emptyTop.innerText.slice(0, -1)) -
          Number(emptyBottom.innerText);
        break;
      case "x":
        emptyBottom.innerText =
          Number(emptyTop.innerText.slice(0, -1)) *
          Number(emptyBottom.innerText);
        break;
      case "÷":
        emptyBottom.innerText = (
          Number(emptyTop.innerText.slice(0, -1)) /
          Number(emptyBottom.innerText)
        ).toFixed(1);
        break;

      default:
        break;
    }
  }
  // -+ BUTTON
  if (e.target.classList.contains("box__plus-minus")) {
    emptyBottom.innerText *= -1;
  }
  // PERCENT
  if (e.target.classList.contains("box__percent")) {
    emptyBottom.innerText *= 1 / 100;
  }

  // DOT
  if (e.target.classList.contains("box__dot")) {
    if (!emptyBottom.innerText.includes(e.target.innerText)) {
      emptyBottom.innerText += e.target.innerText;
    }
  }
});
