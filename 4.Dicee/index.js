random1 = Math.floor(Math.random()*6) + 1;
random2 = Math.floor(Math.random()*6) + 1;

imageSource1 = "images/dice" + random1 + ".png";
imageSource2 = "images/dice" + random2 + ".png";

document.querySelectorAll("img")[0].setAttribute("src",imageSource1);
document.querySelectorAll("img")[1].setAttribute("src",imageSource2);

var announce = document.querySelector("h1");
if (random1 > random2){
    announce.textContent = "🚩 Player 1 Wins!";
} else if (random2 > random1){
    announce.textContent = "Player 2 Wins! 🚩";
} else {
    announce.textContent = "Draw!";
}