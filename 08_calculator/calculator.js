const add = function(num1, num2) {
	let result = num1 + num2;
  return result;
};

const subtract = function(num1, num2) {
	let result = num1 - num2;
  return result;
};

const sum = function(arr) {
	let result = 0;
  if (arr.length === 0) {
  } else {
    result = arr[0];
    for (let i = arr.length - 1; i > 0; i--) {
      result += arr[i];
    }
  }
  return result;
};

const multiply = function(arr) {
  let result = 0;
  if (arr.length === 0) {
    return result;
  } else {
    result = arr[0];
    for (let i = arr.length - 1; i > 0; i--) {
      result *= arr[i];
    }
  }
  return result;
};

const power = function(base, power) {
	let result = base ** power;
  return result;
};

const factorial = function(num) {
	let result = 1;
  for (let i = 1; i <= num; i++) {
    result *= i;
  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
