var fixedRect,movingRect,anotherRect;
function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400, 200, 80, 30);
  anotherRect = createSprite(500,100,50,100);
}

function draw() {
  background("black");  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

 if (isTouching(fixedRect, movingRect)){
  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";

 } 
 else if (isTouching(anotherRect,movingRect)){
  movingRect.shapeColor="purple";
  anotherRect.shapeColor="purple";  
 }
 else {
  movingRect.shapeColor="blue";
  fixedRect.shapeColor="yellow";
  anotherRect.shapeColor= "red";
 }


  drawSprites();
}
