const AREA = document.body;
const CIRCLES = [document.querySelector('#circle1'), document.querySelector('#circle2')];
var windowWidth = window.innerWidth;
var windowHeight = window.innerHeight;

function mouseCoordinates(e) {
    // Capture the event object (mouse movement).
    // Get X coordinate (distance from left viewport edge) via clientX property.
    // Take total window width, subtract current coordinate and width of circle.
    // Do the same for Y coordinate (distance from top viewport edge).
    var horizontalPosition = windowWidth - e.clientX - 26;
    var verticalPosition= windowHeight - e.clientY - 26;

    // Set horizontal and vertical position.
    CIRCLES[0].style.left = horizontalPosition + 'px';
    CIRCLES[0].style.top = verticalPosition + 'px';
    
    // Set horizontal and vertical position.
    CIRCLES[1].style.right = horizontalPosition + 'px';
    CIRCLES[1].style.top = verticalPosition + 'px';
}

function changeColorOnTouch() {
    this.style.backgroundColor = "green";
    this.style.borderColor = "green";
}

// When the mouse moves, run the mouseCoordinates function.
AREA.addEventListener('mousemove', mouseCoordinates, false);

// When the mouse touches the CIRCLES[0], run the changeColorOnTouch function.
CIRCLES[0].addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the CIRCLES[0], remove inline styles with an anonymous function.
CIRCLES[0].addEventListener('mouseleave', function(){CIRCLES[0].removeAttribute("style");}, false);

// When the mouse touches the CIRCLES[0], run the changeColorOnTouch function.
CIRCLES[1].addEventListener('mouseenter', changeColorOnTouch, false);

// When the mouse leaves the CIRCLES[1], remove inline styles with an anonymous function.
CIRCLES[1].addEventListener('mouseleave', function(){CIRCLES[1].removeAttribute("style");}, false);