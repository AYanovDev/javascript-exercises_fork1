const findTheOldest = function (arr) {
  let yearsLived = [];
  for (let i = 0; i < arr.length; i++) {
    if (!("yearOfDeath" in arr[i])) {
      arr[i].yearOfDeath = 2024;
    }
    let personLived = arr[i].yearOfDeath - arr[i].yearOfBirth;
    yearsLived.push(personLived);
  }
  let longestLiving = yearsLived.indexOf(Math.max(...yearsLived));
  let result = { name: arr[longestLiving].name };
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
