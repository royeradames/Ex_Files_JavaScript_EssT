const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const testingTextSpot = document.querySelector("#origin-text p");
// const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");
const wpmValue = document.querySelector(".wpm .value");
const wpsValue = document.querySelector(".wps .value");
const errorsValue = document.querySelector(".errors .value")


let timer = [0,0,0,0];
let interval;
let timerRunning = false;
let errorCounter = 0;
let arrayText = ["They are written to engender faith in Jesus as the Messiah and the incarnation of God, who came to teach, suffer and die for people's sins. Jesus was born circa 6 B.C. in Bethlehem. His mother, Mary, was a virgin who was betrothed to Joseph, a carpenter.",
"A software engineer applies mathematical analysis and the principles of computer science in order to design and develop computer software. There are many types of software that a software engineer can develop, such as operating systems, computer games, middleware, business applications and network control systems.",
"Software Developers often work for computer firms and manufacturers. Their main role is to create the foundations for operative systems on which Computer Programmers work. They design, write, and test code for new systems and software to ensure efficiency."];
let randomOriginText = "";
// Add leading zero to numbers 9 or below (purely for aesthetics):
function leadingZero(time) {
    if (time <= 9) {
        time = "0" + time;
    }
    return time;
}

// Run a standard minute/second/hundredths timer:
function runTimer() {
    let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
    theTimer.innerHTML = currentTime;
    timer[3]++;

    timer[0] = Math.floor((timer[3]/100)/60);
    timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));
}

// Match the text entered with the provided text on the page:
function spellCheck() {
    let textEntered = testArea.value;
    // let originTextMatch = originText.substring(0,textEntered.length);
    let originTextMatch = randomOriginText.substring(0, textEntered.value);
    console.log(textEntered);
    console.log(textEntered.lenght);
    console.log(randomOriginText.substring(0, textEntered.value));
    console.log(originTextMatch);
    if (textEntered == randomOriginText) { //Finish speed test
        clearInterval(interval);
        testWrapper.style.borderColor = "#429890";
        wpmValue.innerHTML = wordsPerTime(randomOriginText, timer[0]);
        wpsValue.innerHTML = wordsPerTime(randomOriginText, timer[1]);
        //display the numbers of errors
        errorsValue.innerHTML = errorCounter;
    } else {
        if (textEntered == originTextMatch) { //working on the test correctly
            testWrapper.style.borderColor = "#65CCf3";
        } else {//make a mistake on the speed test
            testWrapper.style.borderColor = "#E95D0F";
            //count the errors
            errorCounter++;
        }
    }

}

// Start the timer:
function start() {
    let textEnterdLength = testArea.value.length;
    if (textEnterdLength === 0 && !timerRunning) {
        timerRunning = true;
        randomOriginText = testingTextSpot.innerHTML = arrayText[getRandomIndex()]; //populate origin text with new text from array
        interval = setInterval(runTimer, 10);
    }
    
}

// Reset everything:
function reset() {
    clearInterval(interval);
    interval = null;
    timer = [0,0,0,0];
    timerRunning = false;

    testArea.value = "";
    theTimer.innerHTML = "00:00:00";
    testWrapper.style.borderColor = "grey";
    wpmValue.innerHTML = 0;
    errorsValue.innerHTML = 0;
}

// Event listeners for keyboard input and the reset
testArea.addEventListener("keypress", start, false);
testArea.addEventListener("keyup", spellCheck, false);
resetButton.addEventListener("click", reset, false);


//add a words per minute count
// You can find the calculation for it online, and you can just grab the time that you calculated, and combine it with the number of words in your test, and then you can figure out exactly how fast you're typing. 
function wordsPerTime(toldString, time) {
     //\s means "one space", and \s+ means "one or more spaces".
     if(time <= 0){
        return 0;
      } else{
      let regularExpression =/\s+/;
      let stringWords = toldString.trim().split(regularExpression);
      
      if(minutes == timer[0]){
          return stringWords.length/time;
        }else{
            return stringWords.length/time;
      }
  }//by Royer Adames
}

//  you can do something really advanced like add an array of different texts so the tester can switch between different texts to test or even 
function getRandomIndex(){
    return Math.floor(Math.random() * Math.floor(arrayText.length));
}

// add a high score board