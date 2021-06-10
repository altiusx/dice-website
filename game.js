// import { randomNum } from 'index.js';
function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

let randomNumber1 = randomNum();
let randomNumber2 = randomNum();

let image1 = "images/dice" + randomNumber1 + ".png";
let image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);

if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerText = "Player 1 wins!";
} else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerText = "Player 2 wins!";
} else document.querySelector("h1").innerText = "Draw!";
