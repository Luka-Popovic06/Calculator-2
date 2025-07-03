'use strict';
const buttons = document.querySelector('.buttons');
const outputSecondary = document.querySelector('.output-secondary');
const outputMain = document.querySelector('.output-main');
const btnClear = document.querySelector('.btn-clear');
const btnDelete = document.querySelector('.btn-delete');
let numberOne;
let numberTwo;
let operation = '';
let UseOperation = '';
let finaleNumber;
let combineNumber;
let choosingNumberOne = false;
let secondaryOperation = '';
let logikaIzvrsena = false;
let brojevi = [];
let brojeviTwo = [];
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
  }
});
//
btnClear.addEventListener('click', function () {
  reset();
});
function outputLogic() {
  if (logikaIzvrsena === false) {
    outputMain.textContent = numberTwo;
    outputSecondary.textContent = `${numberOne} ${operation}`;
    logikaIzvrsena = true;
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
  if (logikaIzvrsena === true) {
    if (numberOne && numberTwo && operation) {
      calculation(Number(numberOne), secondaryOperation, Number(numberTwo));
      logikaIzvrsena = false;
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
      if (brojevi.length <= 15) {
        brojevi.push(e);
        numberOne = brojevi.join('');
        outputMain.textContent = numberOne;
      }
    }
  } else if (choosingNumberOne === true) {
    if (UseOperation === '') {
      if (brojeviTwo.length <= 15) {
        brojeviTwo.push(e);
        numberTwo = brojeviTwo.join('');
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
  logikaIzvrsena = false;
  brojevi = [];
  brojeviTwo = [];
  outputSecondary.textContent = '';
  secondaryOperation = '';
}
function reset() {
  numberOne = '';
  numberTwo = '';
  operation = '';
  UseOperation = '';
  choosingNumberOne = false;
  logikaIzvrsena = false;
  brojevi = [];
  brojeviTwo = [];
  outputSecondary.textContent = '';
  outputMain.textContent = '';
  secondaryOperation = '';
  finaleNumber = '';
  combineNumber = '';
}
