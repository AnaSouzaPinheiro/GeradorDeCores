// HSL
const buttonHSL = document.querySelector(".buttonHSL");
let hslColor;
let hue;
let saturation;
let lightness;

const gerarCoresHSL = () => {
  hue = parseInt(Math.random() * 255);
  saturation = parseInt(Math.random() * 100);
  lightness = parseInt(Math.random() * 100);
};

const hsl = () => {
  gerarCoresHSL();
  hslColor = "hsl(" + hue + ", " + saturation + "%, " + lightness + "%)";
  mudarCorHSL();
};

const mudarCorHSL = () => {
  r.style.setProperty("--bgHSL-color", hslColor);
  // console.log(hslColor);
};

buttonHSL.addEventListener("click", function () {
  hsl(); 
  document.querySelector(".colorHSL").textContent = hslColor;
});