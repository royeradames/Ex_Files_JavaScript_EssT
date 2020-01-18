const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
let timer = [0,         0,                        0,              0];
//          minutes, seconds, hundredths of seconds (centisecond), centisecond without clear

// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time){
    if(time <= 10 ){
        return `0${time}`;
    }else{
    return time
    }
}

// Run a standard minute/second/hundredths timer:
function runTime(){
    let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = leadingZero(Math.floor((timer[3]/ 100)/60));
    timer[1] = leadingZero(Math.floor((timer[3]/100) - (timer[0] * 60))); //(timer[0] * 60) clear the seconds after reaching 60 minutes
    timer[2] = leadingZero(Math.floor((timer[3]) - (timer[1] * 100) - (timer[0] * 6000))); // (timer[1] * 100) clear the centiceonds to 100 cap. (timer[0] * 6000) clear every time minutes reach 100
    
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value;
    console.log(textEntered);
};

// Start the runTime:
function start(){
    let textEnterLegngth = testArea.value.length; //when can I use value.length and when can I just do .Length?
    if (textEnterLegngth === 0) {
        setInterval(runTime, 10);//research setInterval()
    }
};

// Reset everything:
function reset(){//finish this buttom
    setTimeout
    theTimer.innerHTML = "00:00:00";
    testArea.value = "";
};

// Event listeners for keyboard input and the reset button:
testWrapper.addEventListener("keydown", start, false);
testWrapper.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);


//extra features
/*
Word per minutes calculator
show how many error where made
Array of different text
high score board
*/