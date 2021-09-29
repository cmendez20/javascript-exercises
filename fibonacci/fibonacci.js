const fibonacci = function (num) {
  if (num < 0) return 'OOPS';
  const fibArr = [1];
  let prevNum = 0;
  for (let i = 0; i < num; i++) {
    fibArr.push(prevNum + fibArr[i]);
    prevNum = fibArr[i];
  }
  return fibArr[num - 1];
};

module.exports = fibonacci;
