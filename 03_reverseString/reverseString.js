const reverseString = function(str) {
let result = "";
for (let i = str.length; i > 0; i--) {
    result += str[i - 1];
}
return(result);
}
// Do not edit below this line
module.exports = reverseString;
