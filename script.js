'use strict';
const btnNumbers = document.querySelectorAll('.btn-number');
const btnOperation = document.querySelectorAll('.btn-operation');
const outputSecondary = document.querySelector('.output-secondary');
const outputMain = document.querySelector('.output-main');
const btnEqual = document.querySelector('.btn-equal');
const btnClear = document.querySelector('.btn-clear');
const btnDelete = document.querySelector('.btn-delete');
//
let firstNumber = '';
let secondNumber = '';
let curentOperation = '';
let previousOperation;
//
btnNumbers.forEach(function (number) {
  number.addEventListener('click', function () {
    addToFirstNumber(number);
  });
});
//
btnOperation.forEach(function (operationes) {
  operationes.addEventListener('click', function (e) {
    curentOperation = e.target.textContent;

    if (!secondNumber) {
      outputMain.textContent = '';
      secondNumber = firstNumber;
      outputSecondary.textContent = `${secondNumber}  ${curentOperation}`;
      previousOperation = curentOperation;
      curentOperation = '';
      firstNumber = '';
    } else if (firstNumber && previousOperation && secondNumber) {
      calculation(Number(secondNumber), previousOperation, Number(firstNumber));
      outputSecondary.textContent = `${secondNumber}  ${curentOperation}`;
      previousOperation = curentOperation;
      curentOperation = '';
      firstNumber = '';
      outputMain.textContent = '';
    }
  });
});
//
btnEqual.addEventListener('click', function () {
  if (firstNumber && previousOperation && secondNumber) {
    calculation(Number(secondNumber), previousOperation, Number(firstNumber));
    outputMain.textContent = secondNumber;
    outputSecondary.textContent = '';
    firstNumber = secondNumber;
    secondNumber = '';
  } else {
    outputMain.textContent = secondNumber;
    outputSecondary.textContent = '';
    firstNumber = secondNumber;
    secondNumber = '';
  }
});
//
btnClear.addEventListener('click', function () {
  reset();
});
//
btnDelete.addEventListener('click', function () {
  firstNumber = firstNumber.slice(0, -1);
  outputMain.textContent = firstNumber;
});
function addToFirstNumber(number) {
  if (number.textContent === '.' && firstNumber.includes('.')) {
    outputMain.textContent = firstNumber;
    return;
  } else if (number.textContent === '.' && firstNumber.length === 0) {
    outputMain.textContent = firstNumber;
    return;
  } else {
    firstNumber += number.textContent;
    outputMain.textContent = firstNumber;
  }
}

function calculation(a, operatio, b) {
  if (operatio === '+') {
    add(a, b);
  } else if (operatio === '-') {
    subtract(a, b);
  } else if (operatio === '*') {
    multiply(a, b);
  } else if (operatio === '/') {
    divide(a, b);
  }
}
function add(a, b) {
  secondNumber = a + b;
}
function subtract(a, b) {
  secondNumber = a - b;
}
function multiply(a, b) {
  secondNumber = a * b;
}
function divide(a, b) {
  if (b !== 0) {
    secondNumber = a / b;
  } else {
    alert("Can't divide by 0 !!!");
    reset();
  }
}
function reset() {
  firstNumber = '';
  secondNumber = '';
  curentOperation = '';
  previousOperation = '';
  outputSecondary.textContent = '';
  outputMain.textContent = '';
}
