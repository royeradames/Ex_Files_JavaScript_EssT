const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
let timer = [0,0,0,0];

// Add leading zero to numbers 9 or below (purely for aesthetics):


// Run a standard minute/second/hundredths timer:
function runTime(){
    let currentTime = timer[0] + ":" + timer[1] + ":" + timer[2];
    theTimer.innerHTML = currentTime;
    timer[3]++;

    
}

// Match the text entered with the provided text on the page:
function spellCheck(){
    let textEntered = testArea.value;
    console.log(textEntered);
};

// Start the runTime:
function start(){
    let textEnterLegngth = testArea.value.length;
    console.log(textEnterLegngth);
    if (textEnterLegngth === 0) {
        setInterval(runTime, 10);
    }
};

// Reset everything:
function reset(){
    testArea.value = "";
};

// Event listeners for keyboard input and the reset button:
testWrapper.addEventListener("keydown", start, false);
testWrapper.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);