const people = [
  {
    name: "Carly",
    yearOfBirth: 1942,
    yearOfDeath: 1970,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
];

const findTheOldest = function (obj) {
  let result = [];
  for (let i = 0; i < obj.length; i++) {
    result.push(Object.values(obj[i]));
  }
  let flattened = result.flat();
  let regex = /[1-9][0-9][0-9][0-9]/;
  let filtered = flattened.filter((item) => regex.test(item));
  console.log(filtered);
};

findTheOldest(people);

// Do not edit below this line
module.exports = findTheOldest;
