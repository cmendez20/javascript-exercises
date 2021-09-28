const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr) {
  return arr.reduce((acc, num) => acc + num, 0);
};

const multiply = function (arr) {
  return arr.reduce((prevNum, currNum) => prevNum * currNum);
};

const power = function (num1, num2) {
  return Math.pow(num1, num2);
};

const factorial = function (num) {
  let factorial = num;
  for (let i = num - 1; i > 0; i--) {
    factorial *= i;
  }

  return num === 0 ? 1 : factorial;
};

module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
