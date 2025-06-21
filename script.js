'use strict';
const buttons = document.querySelector('.buttons');
const outputSecondary = document.querySelector('.output-secondary');
const outputMain = document.querySelector('.output-main');
let numberOne;
let numberTwo;
let operation;
let finaleNumber;
let choosingNumberOne = false;
buttons.addEventListener('click', function (e) {
  if (e.target.closest('.btn-number')) {
    if (choosingNumberOne === false) {
      numberOne = e.target.value;
      choosingNumberOne = true;
    } else if (choosingNumberOne === true) {
      numberTwo = e.target.value;
      choosingNumberOne = false;
    }
  } else if (e.target.closest('.btn-operation')) {
    operation = e.target.value;
  } else if (e.target.closest('.btn-equal')) {
    calculation(Number(numberOne), operation, Number(numberTwo));
    outputMain.textContent = Number(finaleNumber);
    console.log(Number(finaleNumber));
  }
});
