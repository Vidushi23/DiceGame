var ran1=Math.floor((Math.random()*6))+1;
var card="images/dice"+ran1+".png";
var ran2=Math.floor((Math.random()*6))+1;
var card2="images/dice"+ran2+".png";
document.querySelectorAll("img")[0].setAttribute("src",card);
document.querySelectorAll("img")[1].setAttribute("src",card2);
if(card2>card){
    var tit="🚩player 2 wins";
    document.querySelector("h1").innerHTML=tit;

}
else if(card>card2){
    var tit="player 1 wins 🚩";
    document.querySelector("h1").innerHTML=tit;
}
else{
    var tit="Draw!";
    document.querySelector("h1").innerHTML=tit;
}