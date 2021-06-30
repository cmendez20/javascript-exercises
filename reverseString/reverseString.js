const reverseString = function (str) {
  const strArr = str.split("");
  const reverseArr = [];

  strArr.forEach((letter) => reverseArr.unshift(letter));

  return reverseArr.join("");
};

module.exports = reverseString;
