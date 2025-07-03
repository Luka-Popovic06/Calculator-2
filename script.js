'use strict';
const buttons = document.querySelector('.buttons');
const outputSecondary = document.querySelector('.output-secondary');
const outputMain = document.querySelector('.output-main');
let numberOne;
let numberTwo;
let operation = '';
let UseOperation = '';
let finaleNumber = '';
let combineNumber;
let choosingNumberOne = false;
let secondaryOperation = '';
let logic = false;
let firstNumbersArray = [];
let secondNumbersArray = [];
//
buttons.addEventListener('click', function (e) {
  if (e.target.closest('.btn-number')) {
    chooseNumber(e.target.value);
  } else if (e.target.closest('.btn-operation')) {
    operation = e.target.value;
    if (numberOne && operation) {
      outputLogic();
    }
  } else if (e.target.closest('.btn-equal')) {
    calculation(Number(numberOne), operation, Number(numberTwo));
    outputMain.textContent = Number(finaleNumber);
    outputSecondary.textContent = '';
    resetCalcEqual();
  } else if (e.target.closest('.btn-dot')) {
    chooseNumber(e.target.value);
  } else if (e.target.closest('.btn-clear')) {
    reset();
  } else if (e.target.closest('.btn-delete')) {
    deletingNumber();
  }
});
//
function outputLogic() {
  if (logic === false) {
    outputMain.textContent = numberTwo;
    outputSecondary.textContent = `${numberOne} ${operation}`;
    logic = true;
    secondaryOperation = operation;
    if (operation === '') {
      choosingNumberOne = true;
    } else if (['/', '*', '+', '-', '='].includes(operation)) {
      brojeviTwo = [];
      brojevi = [];
      choosingNumberOne = true;
      outputMain.textContent = '';
      UseOperation = '';
    }
  } else if (finaleNumber) {
    calculation(Number(finaleNumber), secondaryOperation, Number(numberTwo));
    outputSecondary.textContent = `${finaleNumber} ${secondaryOperation}`;
  }
  if (logic === true) {
    if (numberOne && numberTwo && operation) {
      calculation(Number(numberOne), secondaryOperation, Number(numberTwo));
      logic = false;
      numberOne = finaleNumber;
      numberTwo = '';
      outputMain.textContent = '';
      outputSecondary.textContent = `${finaleNumber} ${secondaryOperation}`;
      outputLogic();
    }
  }
}
function calculation(a, operatio, b) {
  if (operatio === '+') {
    finaleNumber = a + b;
  } else if (operatio === '-') {
    finaleNumber = a - b;
  } else if (operatio === '*') {
    finaleNumber = a * b;
  } else if (operatio === '/') {
    finaleNumber = a / b;
  }
}

function chooseNumber(e) {
  if (choosingNumberOne === false) {
    if (UseOperation === '') {
      if (firstNumbersArray.length <= 15) {
        firstNumbersArray.push(e);
        numberOne = firstNumbersArray.join('');
        outputMain.textContent = numberOne;
      }
    }
  } else if (choosingNumberOne === true) {
    if (UseOperation === '') {
      if (secondNumbersArray.length <= 15) {
        secondNumbersArray.push(e);
        numberTwo = secondNumbersArray.join('');
        outputMain.textContent = numberTwo;
      }
    }
  }
}
function resetCalcEqual() {
  numberOne = finaleNumber;
  numberTwo = '';
  operation = '';
  UseOperation = '';
  choosingNumberOne = false;
  logic = false;
  firstNumbersArray = [];
  secondNumbersArray = [];
  outputSecondary.textContent = '';
  secondaryOperation = '';
}
function reset() {
  numberOne = '';
  numberTwo = '';
  operation = '';
  UseOperation = '';
  choosingNumberOne = false;
  logic = false;
  firstNumbersArray = [];
  secondNumbersArray = [];
  outputSecondary.textContent = '';
  outputMain.textContent = '';
  secondaryOperation = '';
  finaleNumber = '';
  combineNumber = '';
}
function deletingNumber() {
  if (choosingNumberOne === false) {
    firstNumbersArray.pop();
    numberOne = firstNumbersArray.join('');
    outputMain.textContent = numberOne;
  } else if (choosingNumberOne === true) {
    secondNumbersArray.pop();
    numberTwo = secondNumbersArray.join('');
    outputMain.textContent = numberTwo;
  }
}
