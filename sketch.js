var car1, car2, car3, car4;
var wall1, wall2, wall3, wall4;
var border1, border2, border3;


function setup() {
  createCanvas(400,400);
  car1=createSprite(350, 50, 20, 20);
  car1.shapeColor=("white")
  car1.velocityX = -2
  car2=createSprite(350, 150, 20, 20);
  car2.shapeColor=("yellow")
  car2.velocityX= -2
  car3=createSprite(350, 250, 20, 20);
  car3.shapeColor=("red")
  car3.velocityX= -2
  car4=createSprite(350, 350, 20, 20);
  car4.shapeColor=("green")
  car4.velocityX= -2

  speed=random(55,900)
  weight=random(400, 40)

  border1=createSprite(200, 100, 400, 8)
  border1.shapeColor=("white")
  border2=createSprite(200, 200, 400, 8)
  border2.shapeColor=("white")
  border3=createSprite(200, 300, 400, 8)
  border3.shapeColor=("white")

  wall1=createSprite(370, 50, 15, 50);
  wall2=createSprite(370, 150, 15, 50);
  wall3=createSprite(370, 250, 15, 50);
  wall4=createSprite(370, 350, 15, 50);
}

function draw() {
  background("black");
   drawSprites();
}