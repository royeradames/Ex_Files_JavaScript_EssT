const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, html) {
    e.preventDefault();
    html == "oopps" ? CTA.innerHTML = "Book Now!" : CTA.innerHTML = "oopps";
}

CTA.addEventListener('click', function(e){reveal(e, this.innerHTML)}, false);
CTA.addEventListener('click', function(){console.log("The button was clicked!")}, false);
