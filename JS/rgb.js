const r = document.querySelector(":root");

// RGB
const buttonRGB = document.querySelector(".buttonRGB");
let rgbColor;
let red;
let green;
let blue;

const gerarCoresRGB = () => {
  red = parseInt(Math.random() * 255);
  green = parseInt(Math.random() * 255);
  blue = parseInt(Math.random() * 255);
};

const rgb = () => {
  gerarCoresRGB();
  rgbColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  mudarCorRGB();
};

const mudarCorRGB = () => {
  r.style.setProperty("--bgRGB-color", rgbColor);
  // console.log(rgbColor);
};

buttonRGB.addEventListener("click", function () {
  rgb();
  document.querySelector(".colorRGB").textContent = rgbColor;
});