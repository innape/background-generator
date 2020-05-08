var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

var btn = document.querySelector("button");




function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

btn.addEventListener("click", function() {
	var rand1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	var rand2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	body.style.background = 
	"linear-gradient(to right, " 
	+ rand1 
	+ ", " 
	+ rand2
	+ ")";

	css.textContent = body.style.background + ";";

})

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);
