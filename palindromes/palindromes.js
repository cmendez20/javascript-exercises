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
  /*
  let isPalindrome = 0;
  strArr.forEach(el => {
    for (let i = 0; i < strArr.length; i++) {
      el === strArrReverse[i] ? (isPalindrome += 1) : (isPalindrome += 0);
    }
  });
  console.log({ isPalindrome });
  return isPalindrome === str.length ? true : false;
  */
};

// palindromes('ZZZZ car, a man, a maraca.');
palindromes('Racecar!');
module.exports = palindromes;
