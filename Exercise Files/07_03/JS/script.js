//hide the book now button when it's broken and show an alert
//hide the alert and show the book botton if they botton works

//select the content
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

//make the button work again
CTA.classList.remove("hide");
ALERT.classList.add("hide");
//hide and revel the content
function reveal(e){ // e is the default event object that is past down from the onclick event handler
    e.preventDefault();//stops the defaul # link call.
    CTA.classList.toggle("hide");
    ALERT.classList.toggle("hide");
}
//event handler can only handle 1 call per script. for more you need event listeners
//when on click even
CTA.onclick = reveal;