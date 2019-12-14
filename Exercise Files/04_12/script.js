// function doSomeMath() {
// 	var a = 5;
// 	var b = 4;
// 	function multiply(){
// 		//Will not give you an error when this inner function is pass down to the global 
// 		//This is call closures. The compiler remember the outer variables that it need so the function can work
// 		var result = a * b;
// 		return result;
// 	}
// 	return multiply();
// }

// var theResult = doSomeMath();

// console.log("The result: ", theResult);


//make a function with an inner function
function giveMeEms(pixels){
	var baseValue = 16;

	function doTheMath(){
		return pixels/baseValue;
	}
	return doTheMath;

};

//make anonymous functions for small, medium, large and xlarge sizes
var smallSize = giveMeEms(12);
var mediumSize = giveMeEms(18);
var largeSize = giveMeEms(24);
var xlargeSize = giveMeEms(32);
// log to console
console.log("Small size: ", smallSize());
console.log("Medium size: ", mediumSize());
console.log("Large size: ", largeSize());
console.log("Xlarge size: ", xlargeSize());