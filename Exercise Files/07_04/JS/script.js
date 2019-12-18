const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e) {
    e.preventDefault();
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}

// CTA.onclick = reveal;
// CTA.onclick = console.log("The button was clicked!");

//To handle more than one event for the same thing, use addEventListener() https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
CTA.addEventListener("click", reveal, false);
CTA.addEventListener("click", function(){console.log("The button is clicked!")}, false);
