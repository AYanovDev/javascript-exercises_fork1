//(1, 1, 2, 3, 5, 8)
const fibonacci = function (num) {
  if (num < 0) {
    return "OOPS";
  }
  let accumulator = 1;
  let accumulated = 0;
  for (let i = 1; i < parseInt(num); i++) {
    accumulator += accumulated;
    accumulated = accumulator - accumulated;
  }
  return accumulator;
};

// Do not edit below this line
module.exports = fibonacci;

/* 
sequence 1
tor = 2
ted = 1
seq 2
tor = 3
ted = 2
seq 3
tor = 5
ted = 3
*/
