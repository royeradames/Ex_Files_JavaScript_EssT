//make the alt text into a fig caption for the main image

//select the html
const FIGURE = document.querySelector(".featured-image");
const THEIMAGE = FIGURE.querySelector("img");
var altText = THEIMAGE.getAttribute("alt");
//Create an element 
var figureElement = document.createElement("figcaption");

// create text node
var captionText = document.createTextNode(altText);

// place one child node inside another
    //add the element and text together
figureElement.appendChild(captionText);
    //add the complete element and its content to the html document
FIGURE.appendChild(figureElement);
//clear the alt text so it does not repeat
    //stops screen reader not repeat themself 
THEIMAGE.setAttribute("alt", "");