const removeFromArray = function(arr) {
let targetArr = arr;
for (let j = arguments.length - 1; j > 0; j--) {
for (let i = arr.length - 1; i >= 0; i--) {
if (targetArr[i] === arguments[j]) {
    targetArr.splice([i], 1);   
    // delete targetArr[i];
}
}
}
return(targetArr);
};
// Do not edit below this line
module.exports = removeFromArray;
