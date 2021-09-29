const findTheOldest = function (arr) {
  const oldestPerson = arr.sort((a, b) => {
    if (!b.yearOfDeath) b.yearOfDeath = new Date().getFullYear();
    if (!a.yearOfDeath) a.yearOfDeath = new Date().getFullYear();

    return b.yearOfDeath - b.yearOfBirth - (a.yearOfDeath - a.yearOfBirth);
  });
  return oldestPerson[0];
};

// findTheOldest([
//   {
//     name: 'Carly',
//     yearOfBirth: 1942,
//     yearOfDeath: 1970,
//   },
//   {
//     name: 'Ray',
//     yearOfBirth: 1962,
//     yearOfDeath: 2011,
//   },
//   {
//     name: 'Jane',
//     yearOfBirth: 1912,
//     yearOfDeath: 1941,
//   },
// ]);
module.exports = findTheOldest;
