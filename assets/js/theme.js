// get the mouse element
const mouse = document.querySelector(".cursor");
// get all red sections
const sections = document.querySelectorAll(".template--primary");
// add alternative color to cursor
const alternative = "is-alternative";

// function that make the circle follows the mouse pointer
function moveMouse(e) {
	const x = e.clientX;
	const y = e.clientY;
	mouse.style.transform = `translate(${x - 15}px, ${y - 15}px)`;
}

// check for when the mouse is being moving
document.addEventListener("mousemove", moveMouse);