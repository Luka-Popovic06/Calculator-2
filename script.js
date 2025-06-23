'use strict';
const buttons = document.querySelector('.buttons');
const outputSecondary = document.querySelector('.output-secondary');
const outputMain = document.querySelector('.output-main');
let numberOne;
let numberTwo;
let operation;
let finaleNumber;
let choosingNumberOne = false;
let secondaryOperation = '';
let logikaIzvrsena = false;
buttons.addEventListener('click', function (e) {
  if (e.target.closest('.btn-number')) {
    biranjeBroaj(e.target.value);
  } else if (e.target.closest('.btn-operation')) {
    operation = e.target.value;

    if (numberOne && operation) {
      outputLogic();
    }
  } else if (e.target.closest('.btn-equal')) {
    calculation(Number(numberOne), operation, Number(numberTwo));
    outputMain.textContent = Number(finaleNumber);
    outputSecondary.textContent = '';
  }
});
function outputLogic() {
  if (logikaIzvrsena === false) {
    outputMain.textContent = numberTwo;
    outputSecondary.textContent = `${numberOne} ${operation}`;
    logikaIzvrsena = true;
    secondaryOperation = operation;
    choosingNumberOne = true;
  } else if (finaleNumber) {
    calculation(Number(finaleNumber), secondaryOperation, Number(numberTwo));
    outputSecondary.textContent = `${finaleNumber} ${secondaryOperation}`;
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

function biranjeBroaj(e) {
  if (choosingNumberOne === false) {
    numberOne = e;
    choosingNumberOne = true;
    outputMain.textContent = numberOne;
  } else if (choosingNumberOne === true) {
    numberTwo = e;
    choosingNumberOne = false;
    outputMain.textContent = numberTwo;
  }
}
/*if (numberOne && numberTwo && operation) {
  // Izračunaj prethodnu operaciju
  calculation(Number(numberOne), operation, Number(numberTwo));
  //numberOne = String(finaleNumber);
  numberTwo = '';
  outputMain.textContent = '';
  outputSecondary.textContent = `${finaleNumber} ${e.target.value}`;
}*/
