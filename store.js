//variables to store query
var game1=document.querySelectorAll(".game-card")[0];
var game2=document.querySelectorAll(".game-card")[1];
var game3=document.querySelectorAll(".game-card")[2];
var game4=document.querySelectorAll(".game-card")[3];
var game5=document.querySelectorAll(".game-card")[4];
var game6=document.querySelectorAll(".game-card")[5];

//event listener for mouseover.

game1.addEventListener("mouseover",function()
{
    document.querySelector(".games").style.backgroundImage= `url("img/farcry.jpg")`;
});

game2.addEventListener("mouseover",function()
{
    document.querySelector(".games").style.backgroundImage= `url("img/gta-5.jpg")`;
});

game3.addEventListener("mouseover",function()
{
    document.querySelector(".games").style.backgroundImage= `url("img/valo.jpg")`;
});
game4.addEventListener("mouseover",function()
{
    document.querySelector(".games").style.backgroundImage= `url("img/fall-guys.jpg")`;
});
game5.addEventListener("mouseover",function()
{
    document.querySelector(".games").style.backgroundImage= `url("img/lotr.jpg")`;
});
game6.addEventListener("mouseover",function()
{
    document.querySelector(".games").style.backgroundImage= `url("img/rocket-league.jpg")`;
});

//event listener for mouseleave

game1.addEventListener("mouseleave",function()
{
    document.querySelector(".games").style.backgroundImage= "#000";
});
game2.addEventListener("mouseleave",function()
{
    document.querySelector(".games").style.backgroundImage= "#000";
});
game3.addEventListener("mouseleave",function()
{
    document.querySelector(".games").style.backgroundColor="#000";
});
game4.addEventListener("mouseleave",function()
{
    document.querySelector(".games").style.backgroundImage= "#000";
});
game5.addEventListener("mouseleave",function()
{
    document.querySelector(".games").style.backgroundImage= "#000";
});
game6.addEventListener("mouseleave",function()
{
    document.querySelector(".games").style.backgroundImage= "#000";
});