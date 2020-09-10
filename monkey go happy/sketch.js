
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

  var SurvivalTime = 0;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png"); 
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {

  monkey=createSprite(80,315,20,20)
  monkey.addAnimation(("moving"),monkey_running)
  monkey.scale=0.1
  
  //making the ground infinite
  ground=createSprite(400,350,900,100);
  ground.velocityX=-4;
  ground.x=ground.width/2;
 
  FoodGroup = new Group();
  obstacleGroup= new Group();
  
 score=0
  
}


function draw() {
 background(220);
 
 //making the ground infinite
if (ground.x < 0){
   ground.x = ground.width/2;
    }
  
  // making the monkey jump when the space key is pressed
  if(keyDown("space")){
  monkey.velocityY=-12;
 }
 
 //adding gravity to the monkey 
 monkey.velocityY = monkey.velocityY + 0.8 ;
  
 monkey.collide(ground);
  spawnFood();
 spawnObstacle();
 

drawSprites();
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,50);        
  
  
    if(obstacleGroup.isTouching(monkey)){
        ground.velocityX = 0;
        monkey.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
        FoodGroup.setVelocityXEach(0);
        obstacleGroup.setLifetimeEach(-1);
        FoodGroup.setLifetimeEach(-1);
    
    
    }
  
  stroke("black");
  textSize(20);
  fill("black");
  SurvivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ SurvivalTime, 100,50);
}
  


function spawnFood(){

if(frameCount%80===0){
  banana=createSprite(600,250,40,10);
  banana.y=random(120,200);
  banana.addImage(bananaImage);
  banana.scale=0.05;
  banana.velocityX=-5;
  banana.lifetime=300;
  monkey.depth=banana.depth+1;
  FoodGroup.add(banana)
 }
}
function spawnObstacle(){
if(frameCount%300===0){
 obstacle=createSprite(800,35,40,10)
 obstacle.y=random(1,6)
 obstacle.addImage(obstacleImage );
 obstacle.scale=0.2;
  obstacle.velocityX=-2;
  obstacle.lifetime=300
 obstacleGroup.add(obstacle)
}
}




