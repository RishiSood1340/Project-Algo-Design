function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200,200,50,80);
  movingRect = createSprite(400,200,80,30);

  object1 = createSprite(100,100,50,50);
  object2 = createSprite(200,100,50,50);
  object3 = createSprite(300,100,50,50);
  object4 = createSprite(400,100,50,50);

  object1.shapeColor = "green"
  object2.shapeColor = "green"
  object3.shapeColor = "green"
  object4.shapeColor = "green"

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  fixedRect.velocityX = 4;
  movingRect.velocityX = -4;
}

function draw() {
  background(255,255,255);  
  /*
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, object1)){
    object1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }else{
    object1.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  */

  bounceOff(movingRect, fixedRect);
  drawSprites();
}

function isTouching(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2 &&
    object1.y - object2.y < object2.height/2 + object1.height/2 &&
    object2.y - object1.y < object2.height/2 + object1.height/2){
      return true;
  }else{
      return false;
  }
  
}

function bounceOff(object1, object2){
  if(object1.x - object2.x < object2.width/2 + object1.width/2 &&
    object2.x - object1.x < object2.width/2 + object1.width/2){
    object1.velocityX = object1.velocityX * -1
    object2.velocityX = object2.velocityX * -1
    }
    if(object1.y - object2.y < object2.height/2 + object1.height/2 &&
      object2.y - object1.y < object2.height/2 + object1.height/2){
        object1.velocityY = object1.velocityY * -1
        object2.velocityY = object2.velocityY * -1
    }
}