


var groundImg, ground;
var cloudsImg,clouds,cloudsGroup;
var playerImg,player;
var obstacle,obstaclesGroup,obstacleImg;
var gameState = "play"


function preload(){
  groundImg = loadImage("ground.png");
  cloudsImg = loadImage("clouds.png");
  playerImg = loadImage("player.png");
}

function setup() {
  createCanvas(600,600);
  spookySound.loop();
  player = createSprite(200,200,50,50);
  player.addImage("player",playerImg);
  player.scale=0.5
  
  cloudsGroup = new Group();
  obstaclesGroup = new Group();
  
 
}


function draw() {
  background(255);

    } 
  
  if (gameState === "play") {
    
    if(keyDown("space")){
        player.x = player.x - 10;
    }
  
  ghost.velocityY = ghost.velocityY + 0.8;
  if(player.isTouching(obstacles)){
    player.destroy();
    gameState="end"
  }
  
    
      spawnClouds();

  

    }
    
  
  drawSprites();

  if (gameState === "end"){
    fill("red");
    stroke("red");
    textSize(25);
    text("Game Over", 200,250)
  }


function spawnClouds()
 {
  
  if (frameCount %70 === 0) {
    var clouds = createSprite(200, -50);
    var obstacle = createSprite(200,30);
 
  
    clouds.addImage(cloudsImg);
    obstacle.addImage(obstaclesImg);
    
    clouds.velocityY = 1;
    obstacle.velocityY = 1;
   

  
    player.depth = obstacle.depth;
    player.depth = player.depth=+1;
     
player.depth = clouds.depth;
    player.depth =player.depth+1;
    
   
clouds.lifetime = 600;
 obstacles.lifetime = 600;
  
     cloudsGroup.add(clouds);
      obstaclesGroup.add(obstacle);
  
  }

}