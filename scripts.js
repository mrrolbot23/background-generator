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
  body.style.background = `linear-gradient(to right, ${randColor()}, ${randColor()})`;
  setcurrentBackground();
}

window.addEventListener("load", setGradient);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomBtn.addEventListener("click", setrandom);
