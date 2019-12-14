// // Regular function, called explicitly by name:
// function multiply() {
//     var result = 3 * 4;
//     console.log("3 multiplied by 4 is ", result);
// }
// multiply();

// // Anonymous function stored in variable.
// // Invoked by calling the variable as a function:
// var divided = function() {
//     var result = 3 / 4;
//     console.log("3 divided by 4 is ", result);
// }
// divided();

// // Immediately Invoked Function Expression.
// // Runs as soon as the browser finds it:
// (function() {
//     var result = 12 / 0.75;
//     console.log("12 divided by 0.75 is ", result);
// }())

// function that log 12x 12 result
function multiply(){
    console.log("12 x 12 is " + 12*12);
};
//function that divides by 8/2
var divider = function(){
    console.log(" 8 / 2 is " + 8 / 2);
};
//function that multiply 2*50
(function(){
    console.log("2 x 50 is " + (2 * 50));
}());

multiply();
divider();
