var randomnumber1 = Math.random();
randomnumber1= Math.floor(randomnumber1*6)+1;

var randomDiceImage = "dice"+randomnumber1+".png" ;
var randomImageSource ="./imagesDICE/"+randomDiceImage;

var image1= document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

var randomnumber2 = Math.floor(Math.random()*6)+1;
var randomDiceImage = "dice"+randomnumber2+".png" ;
var randomImageSource ="./imagesDICE/"+randomDiceImage;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImageSource);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML=" &#129395 Player 1 wins!";
}
else if(randomnumber1<randomnumber2){
    document.querySelector("h1").innerHTML="Player 2 wins! &#129395 ";
}
else{
    document.querySelector("h1").innerHTML=" Draw!";
}
