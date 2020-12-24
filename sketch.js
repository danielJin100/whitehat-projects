var car, wall;
var speed,weight;
var deform;
function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 20, 20);

    wall = createSprite(1200,200,30,120);
    wall.shapeColor = "gray";

    speed = random(55,90);
    weight = random(400,1500);

    car.velocityX = speed;
    console.log(speed);
    deform = (0.5*weight*speed*speed)/22500
    if(deform < 100){
      car.shapeColor = rgb(0,255,0)
    }
    else if(deform >= 100 <= 180){
      car.shapeColor = rgb(255,255,0)
    }
    else if(deform > 180){
      car.shapeColor = rgb(255,0,0)
    }
   console.log(deform);
}

function draw() {
  background(0);  
  car.collide(wall);
 

  
  drawSprites();
}