const ftoc = function (tempInFahr) {
  return parseFloat((((tempInFahr - 32) * 5) / 9).toFixed(1));
};

const ctof = function (tempInCels) {
  return parseFloat(((tempInCels * 9) / 5 + 32).toFixed(1));
};

module.exports = {
  ftoc,
  ctof,
};
