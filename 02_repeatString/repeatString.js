const repeatString = function(str, num) {
    let result = "";
    if (num < 0) {
        return("ERROR");
    }
    for (let i = num; i > 0; i--) {
    result += str;
}
return(result);
};


// Do not edit below this line
module.exports = repeatString;
