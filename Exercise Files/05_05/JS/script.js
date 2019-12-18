//make book now buttom open in a new tap
const CTAATRIBUTES = document.querySelector(".cta a");

//check if you have the right target element
//if so set it
// console.log(CTAATRIBUTES.hasAttribute("target"))
if (CTAATRIBUTES.hasAttribute("target")) {
    console.log(CTAATRIBUTES.getAttribute("target"));
} else {
    CTAATRIBUTES.setAttribute("target", "_blank");
}

//report CTA attributes to the console
console.log(CTAATRIBUTES.attributes);
// console.log(CTAATRIBUTES.hasAttribute("target"))