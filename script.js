var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("bttn");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function setRandomGradient() {
	var colorOne = makeRandomColor();
	var colorTwo = makeRandomColor();
	body.style.background = 
	"linear-gradient(to right, " 
	+ colorOne
	+ ", " 
	+ colorTwo
	+ ")";

	css.textContent = body.style.background + ";";
	color1.value = colorOne;
	color2.value = colorTwo;
}

function makeRandomColor(){
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
  	return randomColor;
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
randomButton.addEventListener("click", setRandomGradient);