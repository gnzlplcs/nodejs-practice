const Math = {};

function sum(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function divide(num1, num2) {
  if (num2 === 0) {
    return 'No se puede dividir entre cero.';
  } else {
    return num1 / num2;
  }
}

Math.sum = sum;
Math.substract = substract;
Math.multiply = multiply;
Math.divide = divide;

module.exports = Math;