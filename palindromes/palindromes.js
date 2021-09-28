const palindromes = function (str) {
  const strArr = [];
  let isPalindrome = 0;
  for (let i = 0; i < str.length; i++) {
    str[i] === '!' || str[i] === '.' || str[i] === ' ' || str[i] === ','
      ? null
      : strArr.push(str[i].toLowerCase());
  }
  const strArrReverse = strArr.slice().reverse();
  console.log({ strArr }, { strArrReverse });

  for (let i = 0; i < str.length; i++) {
    isPalindrome += strArr[i] === strArrReverse[i] ? 1 : -1;
  }

  console.log({ isPalindrome }, str.length);
  return isPalindrome === str.length;
};

// palindromes('ZZZZ car, a man, a maraca.');
// palindromes('Racecar!');
module.exports = palindromes;
