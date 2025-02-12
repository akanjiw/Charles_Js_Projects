alert('Project week 1: Calculator \nInpect the page and select your console..!');
console.log('Project week 1: Calculator \nloaded..!');
let previousNumber;
let currentNumber;
let operator;
let flag = false;

function clearDisplay() {
  if (document.getElementById('display').value === '') {
    console.log('Display is already empty..!');
    return;
  } else {
    document.getElementById('display').value = '';
    previousNumber = '';
    currentNumber = '';
    operator = '';
    console.log('Memory Cleared..!');
  }
}

function deleteLast() {
  if (document.getElementById('display').value === '') {
    return;
  } else {
    currentNumber = document.getElementById('display').value;
    document.getElementById('display').value = currentNumber.slice(0, -1);
    console.log(`Last character deleted\nPrevious Value: ${currentNumber}`);
  }
}

function setData(data) {
  if (flag) {
    document.getElementById('display').value = '';
    if (data === '.') {
      document.getElementById('display').value += '0.';
    }
    if (data === 0) {
      document.getElementById('display').value += '0';
      return;
    }
    flag = false;
  }

  if (document.getElementById('display').value.includes('.') && data === '.') {
    console.log('Decimal point already exists..!');
    return;
  } else if (document.getElementById('display').value === '' && data === 0) {
    console.log('Invalid input..!');
    return;
  } else {
    document.getElementById('display').value += data;
  }
}

function setOperator(userOperator) {
  previousNumber = document.getElementById('display').value;
  operator = userOperator;
  flag = true;
}

function calculate() {
  currentNumber = document.getElementById('display').value;
  let result;
  switch (operator) {
    case '+':
      result = parseFloat(previousNumber) + parseFloat(currentNumber);
      break;
    case '-':
      result = parseFloat(previousNumber) - parseFloat(currentNumber);
      break;
    case '*':
      result = parseFloat(previousNumber) * parseFloat(currentNumber);
      break;
    case '/':
      result = parseFloat(previousNumber) / parseFloat(currentNumber);
      break;
    default:
      console.log('Invalid operator..!');
      return;
  }
  document.getElementById('display').value = result;
  previousNumber = '';
  currentNumber = '';
  operator = '';
  flag = true;
  console.log('Calculation completed..!');
}

function percentage() {
  currentNumber = document.getElementById('display').value;
  let result = parseFloat(currentNumber) / 100;
  document.getElementById('display').value = result;
  console.log('Percentage calculated..!');
  flag = true;
}
