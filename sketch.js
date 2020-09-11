
var movingRect

function setup() {
  createCanvas(1200,600);
  movingRect=createSprite(600,400,50,80);
  
  movingRect.shapeColor="green";
    
}

function draw() {
   
movingRect.x=World.mouseX;
movingRect.y=World.mouseY;
background(World.mouseX,World.mouseY,0);

  drawSprites();
}

