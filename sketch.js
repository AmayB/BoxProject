var box;

function setup() {
  createCanvas(400,400);
  box = createSprite(200,200,50,50);
  box.shapeColor = "brown";
}

function draw() 
{
  background("green");

  if(keyIsDown(UP_ARROW)) {
    box.position.y = box.position.y -7;
  }

  if(keyIsDown(DOWN_ARROW)) {
    box.position.y = box.position.y +7;
  }

  if(keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x +7;
  }

  if(keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x -7;
  }

  drawSprites();
}