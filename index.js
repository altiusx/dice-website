function randomNum() {
  return Math.floor(Math.random() * 6) + 1;
}

randomNumber1 = randomNum();
randomNumber2 = randomNum();

let image1 = "images/dice" + randomNumber1 + ".png";
let image2 = "images/dice" + randomNumber2 + ".png";

document.querySelector(".img1").setAttribute("src", image1);
document.querySelector(".img2").setAttribute("src", image2);
document.querySelector(".results").innerText = "You have rolled " + (randomNumber1+randomNumber2) + "!";
