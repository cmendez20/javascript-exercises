const sumAll = function (num1, num2) {
  if (num1 < 0 || num2 < 0) return 'ERROR';
  if (typeof num1 !== 'number' || typeof num2 !== 'number') return 'ERROR';

  let sum = 0;
  const minNum = num1 < num2 ? num1 : num2;
  const maxNum = num2 > num1 ? num2 : num1;

  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }

  return sum;
};

module.exports = sumAll;
