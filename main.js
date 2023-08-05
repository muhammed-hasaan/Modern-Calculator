let displayValue = "";
let isEqualButtonDisabled = true;
let isError = false;

function Shownumber(number) {
  // enableEqualButton()
  if (isError) {
    displayValue = "";
    isError = false;
  }

  if (displayValue.indexOf[0] == number) {
    // disableEqualButton();
    disableEqualButton()
    checkLastIndex2()
  }
  displayValue += number;
  updateDisplay();
  checkLastIndex();
}

function Showoperator(operator) {
  if (displayValue === "" && (operator === '/' || operator === '*')) {
    // displayValue = "You do not put  / * at first index"
    disableEqualButton();
    return;
  }
  if (displayValue == "" && (operator === '+' || operator === '-')) {
    displayValue = ""
    disableEqualButton();
  }

  if (isError) {
    displayValue = "";
    isError = false;
  }

  const lastChar = displayValue[displayValue.length - 1];

  if (
    lastChar === '+' ||
    lastChar === '-' ||
    lastChar === '*' ||
    lastChar === '/'
  ) {
    displayValue = displayValue.slice(0, displayValue.length - 1);
  }

  displayValue += operator;
  updateDisplay();
  checkLastIndex();
}

function Clearitem() {
  disableEqualButton();
  displayValue = "";
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(displayValue);
    displayValue = result.toString();
    updateDisplay();
  } catch (error) {
    displayValue = "Don't put any operator at last";
    isError = true;
    updateDisplay();
  }
  disableEqualButton();
}

function updateDisplay() {
  const display = document.getElementById("display");
  display.value = displayValue;
}

function enableEqualButton() {
  const equalButton = document.getElementById("Generate");
  equalButton.style.background = "orange";
  equalButton.style.color = "white";
  equalButton.disabled = false;
}

function disableEqualButton() {
  const equalButton = document.getElementById("Generate");
  equalButton.style.background = "gray";
  equalButton.style.color = "black";
  equalButton.disabled = true;
}

function checkLastIndex() {
  const lastChar = displayValue[displayValue.length - 1];
  if (!isNaN(lastChar)) {
    enableEqualButton();
  } else {
    disableEqualButton();
  }
}
function checkLastIndex2() {
  const lastChar = displayValue[displayValue.length];
  if (isNaN(lastChar)) {
    enableEqualButton();
  } else {
    disableEqualButton();
  }
}

// Add event listener to disable equal button on page load
window.addEventListener('load', function () {
  disableEqualButton();
});


