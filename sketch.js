var rect1;
var rect2;
var rect3;
var rect4;

function setup() {
  createCanvas(800,600);
  rect1 = createSprite(400, 550, 80, 50);
  rect1.shapeColor = "green";
  rect1.velocityY  = -5;

  rect2 = createSprite(400,50,50,80);
  rect2.shapeColor = "green";
  rect2.velocityY = 5;

  rect3 = createSprite(50,500,50,50);
  rect3.shapeColor = "red";
  rect3.velocityX = 5;

  rect4 = createSprite(750,500,50,80);
  rect4.shapeColor = "red";
  rect4.velocityX = -5;

}

function draw() {
  background(0);

  if(rect1.y - rect2.y <= rect1.height/2 + rect2.height/2 && rect2.y - rect1.y <= rect1.height/2 + rect1.height/2 ){
    rect1.velocityY = rect1.velocityY * (-1);
    rect2.velocityY = rect2.velocityY * (-1);
  }

  if(rect3.x - rect4.x <= rect3.width/2 + rect4.width/2 && rect4.x - rect3.x <= rect4.width/2 + rect3.width/2 ){
    rect3.velocityX = rect3.velocityX * (-1);
    rect4.velocityX = rect4.velocityX * (-1);
  }

  rectMode(CENTER);



  drawSprites();
}