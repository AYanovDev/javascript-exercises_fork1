const roundDown = function(num) {
  return ((Math.round(num * 10)) / 10);
}

const convertToCelsius = function(fahrenheit) {
  let result = (fahrenheit - 32) * (5 / 9);
  result = roundDown(result);
  return result;
};

const convertToFahrenheit = function(celsius) {
 let result = (celsius * (9 / 5) + 32);
 result = roundDown(result);
 return result;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
