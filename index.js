var randomNumber1= Math.floor(Math.random()*6)+1;
var basicSyntax= "images/"+"dice"+randomNumber1+".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src",basicSyntax);

var randomNumber2= Math.floor(Math.random()*6)+1;
var basicSyntax2="images/"+"dice"+randomNumber2+".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src",basicSyntax2);


var answerlink = document.querySelectorAll(".answer")[0];
if(randomNumber1>randomNumber2){
  answerlink.innerText="🚩Hurrah!!!! Player 1"+" Wins the game.";
}
else if(randomNumber1<randomNumber2){
  answerlink.innerText="🚩Hurrah!!!! Player 2"+" Wins the game.";
}
else{
  answerlink.innerText="🎌It's A Draw!!!!";
}
