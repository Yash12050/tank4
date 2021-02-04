var pea, obstacle, enemies, obstacleimg, background,barrel1, obstaclegroup,gameState, life, reset, score, wall1,wall2,wall3,wall4;

function preload(){
    obstacleimg = loadImage("rock.png");
}

function setup(){
    createCanvas(515,586);
    //backgroundimg = createSprite(displayWidth/2,displayHeight/2,600,800);
  obstaclegroup = new Group();
  peagroup = new Group();
  gameState = 0;
  life = 3;
  score = 0;
  wall1 = createSprite(515,585/2,5,585);
  wall2 = createSprite(0,585/2,5,585);
  wall3 = createSprite(515/2,0,515,5);
  wall4 = createSprite(515/2,586,515,5);
  pea = createSprite(300,490,10,10);
  pea.shapeColor = "red";
  pea.velocityY=-8;
  pea.velocityX=8;
  barrel1 = createSprite(300,500,60,10);
}

function draw(){
    background("black");
    //backgroundimg.shapeColor = "green";
 
  if(gameState === 0){
    barrel1.x = mouseX;
    pea.bounceOff(wall1);
    pea.bounceOff(wall2);
    pea.bounceOff(wall3);
    pea.bounceOff(wall4);
    pea.bounceOff(barrel1);
  obstaclegroup.setVelocityYEach(5);
  if(obstaclegroup.y >= 600){
    life = life-1;
    obstaclegroup.destroy();
  } 
  spawnRocks();
    /*if(pea.isTouching(obstaclegroup)){
      obstacle.destroy();
      score = score+10; 
    }*/
    if(life ===0){
      gameState = 1;
    }
  }
  if(gameState === 1){
    text("Game Over",250,290);
    obstaclegroup.setVelocityYEach(0);
    reset = createButton("RESET");
    reset.position(250,300);
    if(mousePressed(reset)){
      gameState = 0;
    }
  }
  text("score:"+score,400,110);
  text("life:"+life,400,100); 
  drawSprites();
}


function spawnRocks(){
  if(World.frameCount%60===0){
      obstacle = createSprite(random(10,505),10,100,100);
  obstacle.addImage(obstacleimg);
  obstacle.scale = 0.2;
      obstaclegroup.add(obstacle);
    }
}