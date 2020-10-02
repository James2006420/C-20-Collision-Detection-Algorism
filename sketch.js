var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 50);
  fixedRect = createSprite(200, 200, 50, 80);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background("black");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    fixedRect.y - movingRect.y < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.width/2 + fixedRect.width/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } 
  else
  {
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }

  drawSprites();
}