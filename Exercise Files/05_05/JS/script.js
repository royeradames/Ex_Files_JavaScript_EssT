//target book now button and make it constant
const CTAELEMENT = document.querySelector(".cta a");
//if attribute has -blank say so and if not make it so
if (CTAELEMENT.hasAttributes("target") ) {
    console.log(CTAELEMENT.getAttribute("target"));
} else {
    CTAELEMENT.setAttribute("target", "_blank")
}
//console log  contant attributes
console.log(CTAELEMENT.attributes);