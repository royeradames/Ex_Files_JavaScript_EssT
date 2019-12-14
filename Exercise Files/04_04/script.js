function findBiggestFraction(a,b) {
    var result = [];
    a>b ? result = ["First Fraction: ", a] : result = ["Second Fraction: ", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var biggestFraction = findBiggestFraction(firstFraction,secondFraction);
console.log("The first fraction is " + firstFraction);
console.log("The second fraction is " + secondFraction);
console.log("The biggest fraction is " + biggestFraction[0] + " " + biggestFraction[1]);
