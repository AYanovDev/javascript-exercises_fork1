const palindromes = function (str) {
  let splitArr = str
    .replace(/[,.! ]/g, "")
    .toLowerCase()
    .split("");
  let firstHalf = [];
  let secondHalf = [];
  if (splitArr.length % 2 == 0) {
    for (let i = splitArr.length / 2 - 1; i >= 0; i--) {
      firstHalf.push(splitArr[i]);
    }
    for (let i = splitArr.length / 2; i < splitArr.length; i++) {
      secondHalf.push(splitArr[i]);
    }
    if (firstHalf.toString() === secondHalf.toString()) {
      return true;
    } else return false;
  } else
    for (let i = splitArr.length / 2 - 1.5; i >= 0; i--) {
      firstHalf.push(splitArr[i]);
    }
  for (let i = splitArr.length / 2 + 0.5; i < splitArr.length; i++) {
    secondHalf.push(splitArr[i]);
  }
  if (firstHalf.toString() === secondHalf.toString()) {
    return true;
  } else return false;
};

// Do not edit below this line
module.exports = palindromes;
