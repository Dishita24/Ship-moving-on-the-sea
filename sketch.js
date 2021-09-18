var ship, shipmoving;
var sea,seaimage;
function preload(){
seaimage = loadImage("sea.png");
shipmoving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(600,500);
  

//create background sea
 sea=createSprite(100,200,50,50)
 sea.addImage(seaimage)

 //create sprite Ship and add animation to it
 ship=createSprite(150,300,100,50)
 ship.addAnimation("run",shipmoving)
 ship.scale=0.2
}

function draw() {
  //background("blue");
  //ship.velocityX=1
  
  if (sea.x<0)
  {
    sea.x=sea.width/2
  }
 drawSprites()
}