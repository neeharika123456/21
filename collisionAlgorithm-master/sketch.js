var fixedRect, movingRect;
var rect1,rect2,rect3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";

  rect1 = createSprite(300,100,60,70);
  rect1.shapeColor = "pink" ;

  rect2 = createSprite(500,700,60,70);
  rect2.shapeColor = "yellow" ;

  rect3 = createSprite(200,400,80,70);
  rect3.shapeColor = "blue" ;

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  //function call
  //arguments
if(isTouching(movingRect,rect2))
{
  movingRect.shapeColor = "red";
  rect2.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  rect2.shapeColor = "yellow";

}

if(isTouching(movingRect,rect1))
{
  movingRect.shapeColor = "red";
  rect1.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  rect1.shapeColor = "pink";
}

if(isTouching(movingRect,rect3))
{
  movingRect.shapeColor = "red";
  rect3.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  rect3.shapeColor = "blue";

}

if(isTouching(movingRect,fixedRect))
{
  movingRect.shapeColor = "red";
  fixedRect.shapeColor = "red";
}
else{
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

}
  drawSprites();
}
//parameters
