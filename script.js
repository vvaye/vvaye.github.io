const taglines = [
	"Computer science and engineering @ MIT.",
	"Ultimate frisbee with sMITe.",
	"Software Engineer Intern @ Chewy.",
	"Lab Assistant for 6.190/6.191 @ MIT EECS.",
];

let taglineIx = 0;
let charIx = 0;
let isDeleting = false;

const tagline = document.getElementById("tagline-text");
const cursor = document.getElementById("cursor");

function typeTagline() {
	// tagline.textContent = "HELLO";
	const currentTagline = taglines[taglineIx];

	if (isDeleting) {
		tagline.textContent = currentTagline.slice(0, charIx - 1);
		charIx--;
	} else {
		tagline.textContent = currentTagline.slice(0, charIx + 1);
		charIx++;
	}

	let speed = isDeleting ? 20 : 75;

	if (!isDeleting && charIx === currentTagline.length) {
		// we are at the end, pause for a second
		speed = 3000;
		isDeleting = true;
	} else if (isDeleting && charIx === 0) {
		// finished the phrase, move on to next
		isDeleting = false;
		taglineIx = (taglineIx + 1) % taglines.length;
		// charIx = 0;
		speed = 500;
	}

	setTimeout(typeTagline, speed);
}

typeTagline();
