var mo, fo;

function setup() {
  createCanvas(1200,800);
  mo = createSprite(400, 200, 80, 30);
  mo.shapeColor = "pink";
  fo = createSprite(600, 400, 50, 80);
  fo.shapeColor = "purple"; 
  fo.velocityX = 1;
  fo.velocityY = 1;
}

function draw() {
  background("black");  
  mo.x = World.mouseX;
  mo.y = World.mouseY;
  
  //istouching();
  bounceoff();
  drawSprites();
}

function istouching() {
if (mo.x - fo.x < mo.width/2 + fo.width/2 && fo.x - mo.x < mo.width/2 + fo.width/2 && 
  mo.y - fo.y < mo.height/2 + fo.height/2 && fo.y - mo.y < mo.height/2 + fo.height/2)  {
mo.shapeColor = "blue";
fo.shapeColor = "yellow";
} else {
mo.shapeColor = "pink";
fo.shapeColor = "purple";
}
}

function bounceoff() {
  if (mo.x - fo.x < mo.width/2 + fo.width/2 && fo.x - mo.x < mo.width/2 + fo.width/2) {
  mo.velocityX = mo.velocityX*(-1);
  fo.velocityX = fo.velocityX*(-1);
  } 
  if( mo.y - fo.y < mo.height/2 + fo.height/2 && fo.y - mo.y < mo.height/2 + fo.height/2) {
  mo.velocityY = mo.velocityY*(-1);
  fo.velocityY = fo.velocityY*(-1);
  }
  }