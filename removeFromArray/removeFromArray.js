const removeFromArray = function (arr, ...theArgs) {
  const newArr = arr.filter(item => !theArgs.includes(item));

  return newArr;
};

module.exports = removeFromArray;
