var num1 = 7/9;
var num2 = 13/25;

var theBiggest = function(a,b) {
    var result;
    a>b ? result = ["a", a] : result = ["b", b];
    return result;
}(num1, num2);

console.log(theBiggest);

