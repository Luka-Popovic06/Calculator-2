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
let operation = '';
let saveOperation;
let resolt;
//
btnNumbers.forEach(function (number) {
  number.addEventListener('click', function () {
    textOutputLogic(number);
  });
});
//
btnOperation.forEach(function (operationes) {
  operationes.addEventListener('click', function (e) {
    operation = e.target.textContent;
    textOutputLogic();
  });
});
//

//
btnClear.addEventListener('click', function () {
  reset();
});
//
btnDelete.addEventListener('click', function () {
  firstNumber = firstNumber.slice(0, -1);
  outputMain.textContent = firstNumber;
});

function textOutputLogic(number) {
  if (operation === '') {
    firstNumber += number.textContent;
    outputMain.textContent = firstNumber;
  } else if (!secondNumber) {
    outputMain.textContent = '';
    secondNumber = firstNumber;
    outputSecondary.textContent = `${secondNumber}  ${operation}`;
    saveOperation = operation;
    operation = '';
    firstNumber = '';
  } else if (firstNumber && saveOperation && secondNumber) {
    calculation(Number(secondNumber), saveOperation, Number(firstNumber));
    outputSecondary.textContent = `${secondNumber}  ${operation}`;
    saveOperation = operation;
    operation = '';
    firstNumber = '';
    outputMain.textContent = '';
  }
}

function calculation(a, operatio, b) {
  if (operatio === '+') {
    secondNumber = a + b;
  } else if (operatio === '-') {
    secondNumber = a - b;
  } else if (operatio === '*') {
    secondNumber = a * b;
  } else if (operatio === '/') {
    secondNumber = a / b;
  }
}

function reset() {
  firstNumber = '';
  secondNumber = '';
  operation = '';
  saveOperation = '';
  outputSecondary.textContent = '';
  outputMain.textContent = '';
}
