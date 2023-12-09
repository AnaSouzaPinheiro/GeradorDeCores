// HEX
const buttonHEX = document.querySelector(".buttonHEX");
const HEX = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let hexRandom;
let hexColor;

const gerarCoresHEX = () => {
  hexRandom = new Array(6);
  for (let index = 0; index < 6; index++) {
    hexRandom[index] = HEX[Math.floor(Math.random() * HEX.length)];
  }
};

const hex = () => {
  gerarCoresHEX();
  hexColor = `#${hexRandom[0]}${hexRandom[1]}${hexRandom[2]}${hexRandom[3]}${hexRandom[4]}${hexRandom[5]}`;
  mudarCorHEX();
};

const mudarCorHEX = () => {
  r.style.setProperty("--bgHEX-color", hexColor);
  // console.log(hexColor);
};

buttonHEX.addEventListener("click", function () {
  hex();
  document.querySelector(".colorHEX").textContent = hexColor;
});