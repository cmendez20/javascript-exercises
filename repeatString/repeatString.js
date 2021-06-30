const repeatString = function (str, counter) {
  if (counter < 0) return "ERROR";

  let newStr = "";
  for (let i = 0; i < counter; i++) {
    newStr += str;
  }
  return newStr;
};

module.exports = repeatString;
