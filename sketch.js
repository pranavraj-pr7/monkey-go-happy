var monkey, monkey_running
var banana, bananaImage, obstacle, obstacleImage
var bananaGroup, obstacleGroup
var ground;
var score= 0;
var backgroundImg, backGround

function preload() {
  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

  backgroundImg = loadImage("yeet.jpg");

}



function setup() {
  createCanvas(600, 400);


  backGround = createSprite(0, 200, 400, 200);
  backGround.addImage(backgroundImg);
  backGround.scale = 5;
  backGround.velocityX = -4;
backGround.x = backGround.width / 2;

  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 350, 1200, 15)
  ground.velocityX = -4;
  ground.x = ground.width / 2
  ground.visible = false;
  console.log(monkey.velocityY);



  bananaGroup = createGroup();
  obstacleGroup = createGroup();
}


function draw() {

  

  monkey.collide(ground);
   monkey.velocityY = monkey.velocityY + 0.6

  if (backGround.x < 0) {
    backGround.x = backGround.width / 2;
  }
  
  if (ground.x < 0) {
   ground.x = ground.width / 2;
  }

  if (keyDown("space") && monkey.y > 280) {
    monkey.velocityY = -12;
  }

  if (bananaGroup.isTouching(monkey)){
   score=score+2;
    bananaGroup.destroyEach()
  }
  
 if (obstacleGroup.isTouching(monkey)){
    monkey.scale=0.1;
  }

  switch  (score){
    case 10:monkey.scale=0.12;
      break;
    case 20:monkey.scale=0.14;
      break;
      case 30:monkey.scale=0.16;
      break;
      case 40:monkey.scale=0.18;
      break;
      
  }
    
    
    
    
  drawSprites()
  
  textSize(23);
  fill("white")
  stroke("black")
  text("Score: "+score, 350, 50);
  spawnObstacles()

  spawnBananas();

}

function spawnBananas() {
  if (frameCount % 80 === 0) {
    var banana = createSprite(200, 200, 10, 10);
    banana.addImage(bananaImage);
    banana.y = Math.round(random(120, 200));
    banana.scale = 0.1
    banana.velocityX = -3;
    banana.setLifetime = 50;
    bananaGroup.add(banana)
  }

}

function spawnObstacles() {
  if (frameCount % 300 === 0) {
    var obstacle = createSprite(600, 330, 20, 20);
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.17 
    obstacle.velocityX = -4
    obstacle.setLifetime = 50;
    obstacleGroup.add(obstacle)
  }
}