var randomNumber1=Math.floor(Math.random()*6+1);
console.log(randomNumber1);
randomDiceImage="dice"+randomNumber1+".png";
randomDiceFolder="images/"+randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomDiceFolder);
var randomNumber2=Math.floor(Math.random()*6+1);
console.log(randomNumber2);
randomDiceImage2="dice"+randomNumber2+".png";
randomDiceFolder2="images/"+randomDiceImage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomDiceFolder2);

if(randomNumber1>randomNumber2)
{
  document.querySelector("h1").innerHTML="Player 1 Wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerHTML="Player2 Wins!";
}
else {
  document.querySelector("h1").innerHTML="It is drawn!";
}
