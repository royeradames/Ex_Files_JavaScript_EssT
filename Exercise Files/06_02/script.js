//ticking clock logic
//comment out transition: transform .5s ease-in-out; for it to work
const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");


function runTheClock(){
    //get current time
    let date = new Date();
    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    //vars for degrees
        //360 degrees in a circle
        //60 secons in one minute,
        //60 min in one hr
        //12 hour for 12am, 12pm clock
    let hrPosition = (hr*360/12)+(min*(360/60)/12);
    let minPosition = (min*360/60)+(sec*(360/60)/60);
    let secPosition = sec*360/60; 

    //updating inline css so the clock legs can move
    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(runTheClock, 1000);


// //fix return to zero problem
// //but if the javascript is slow down the clock will have to catch up when it's focus on  
// const HOURHAND = document.querySelector("#hour");
// const MINUTEHAND = document.querySelector("#minute");
// const SECONDHAND = document.querySelector("#second");

// //get current time
// let date = new Date();
// let hr = date.getHours();
// let min = date.getMinutes();
// let sec = date.getSeconds();

// //vars for degrees
//         //360 degrees in a circle
//         //60 secons in one minute,
//         //60 min in one hr
//         //12 hour for 12am, 12pm clock
//         let hrPosition = (hr*360/12)+(min*(360/60)/12);
//         let minPosition = (min*360/60)+(sec*(360/60)/60);
//         let secPosition = sec*360/60;

// function runTheClock(){
//     hrPosition = hrPosition+(3/360);
//     minPosition = minPosition+(6/60); 
//     secPosition = secPosition+6 //number of degrees to display one more second. 360 degrees for the circle / 60 seconds to go over the whole circle = 6;

//     //updating inline css so the clock legs can move
//     HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
//     MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
//     SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
// }

// var interval = setInterval(runTheClock, 1000);