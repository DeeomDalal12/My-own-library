var movingRect, fixedRect;
var gameObj1, gameObj2, gameObj3;
function setup() {
  createCanvas(800,400);
  movingRect=createSprite(400, 200, 50, 50);
  movingRect.shapeColor="green";
  movingRect.debug=true;
  fixedRect=createSprite(200,200,50,80);
  fixedRect.shapeColor="green";
  fixedRect.debug=true;
  gameObj1=createSprite(100,100,50,50);
  gameObj1.shapeColor="blue";
  gameObj2=createSprite(200,100,50,50);
  gameObj2.shapeColor="yellow";
  gameObj3=createSprite(300,100,50,50);
  gameObj3.shapeColor="aqua";
}

function draw() {
  background("white");  
  movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
if(isTouching(movingRect, gameObj1)){
  movingRect.shapeColor="red";
    gameObj1.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gameObj1.shapeColor="green";
}

if(isTouching(movingRect, gameObj3)){
  movingRect.shapeColor="red";
    gameObj3.shapeColor="red";
}
else{
  movingRect.shapeColor="green";
  gameObj3.shapeColor="green";
}
  drawSprites();
}

