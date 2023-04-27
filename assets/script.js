const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
// Declaration of variables useful for initiate the code
let dots = document.getElementsByClassName("dots")[0];
let number = 0;
let divDots;

// Display bullet point
function displayBullet(){
	for (let _a in slides){
		divDots = document.createElement("div");
		dots.appendChild(divDots);
		divDots.classList.add("dot");
	}
}
displayBullet();

// Select arrows in html
let rightArrow = document.querySelector(".arrow_right");
let leftArrow = document.querySelector(".arrow_left");

// Evenment click on arrows
// Right side
rightArrow.addEventListener('click', () => {
	console.log("click droit"); // Right click test
	(number === slides.length -1) ? number = 0 : number++; //condition ternaire
	imgTextSlide(); // Call function
	changeBullet(); // Call function
});
// Left side
leftArrow.addEventListener('click', () => {
	console.log("click gauche"); // Left click test
	(number === 0) ? number = slides.length -1 : number --; //condition ternaire
	imgTextSlide(); // Call function 
	changeBullet(); // Call function
});

// Display img & text
function imgTextSlide() {
	// Image
	let img = document.querySelector(".banner-img");
	img.src = "assets/images/slideshow/" + slides[number].image;
	// Text
	let text = document.querySelector("#banner p");
	text.innerHTML = slides[number].tagLine;
}

// Change bullet
function changeBullet() {
	let point = document.querySelectorAll(".dot");
	for (let i = 0; i < point.length; i++) {
		 (i == number) ? point[i].classList.add("dot_selected") : point[i].classList.remove("dot_selected"); //condition ternaire
	}
}
changeBullet();