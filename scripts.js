var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

//Display current background color
function setcurrentBackground() {
  css.innerHTML = `${body.style.background};`;
}

//Creates a Random color hex
const randColor = () => {
  return (
    "#" +
    Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")
      .toUpperCase()
  );
};

// Set Gradient Function
function setGradient() {
  body.style.background = `linear-gradient(to right, ${color1.value}, ${color2.value})`;
  setcurrentBackground();
}

//Set Random Background
function setrandom() {
  var newColor1 = randColor();
  var newColor2 = randColor();
  body.style.background = `linear-gradient(to right, ${newColor1}, ${newColor2})`;
  color1.value = newColor1;
  color2.value = newColor2;
  setcurrentBackground();
}

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", setrandom);
