
var monkey , monkey_running,monkeyCollide
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstaclesGroup
var score
var ground,groundImage

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  monkeyCollide = loadAnimation("sprite_1.png");
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  groundImage = loadImage("sprite_0.png");
  
  score=0;
  bananascore=0;
  
  obstaclesGroup=new Group();
  FoodGroup=new Group();
  
}



function setup() {
  createCanvas(600,600);

  monkey = createSprite(80,550,10,10);
  monkey.scale=0.12;
  monkey.addAnimation("moving",monkey_running);
  monkey.addAnimation("collide", monkeyCollide);
  
  
  ground = createSprite(300,590,600,20)
  ground.addAnimation(groundImage);
  ground.X=ground.width/2
  console.log(ground.X);
  

  
}


function draw() {

  background(220);
  
  if(keyDown("space") && monkey.y >=500){
    monkey.velocityY=-10;
  }
  
  monkey.velocityY = monkey.velocityY+0.8
  
  drawSprites();
  obstacles();
 monkey.collide(ground);

  if(frameCount % 60 === 0){
   banana=createSprite(600,450,20,20);
  banana.addImage(bananaImage);
  banana.velocityX=-10;
  banana.setlifetime=700;
  banana.scale=0.1;
  FoodGroup.add(banana);
  }
  
    
    var survivalTime
    stroke("white");
    textSize(20);
    fill("white");
    text("score: "+ score,500,50);
    
    
    stroke("black");
    textSize(20);
    fill("black");
    survivalTime=Math.ceil(frameCount/frameRate())
    text("survivalTime: "+ survivalTime,300,50);
  
    if(obstaclesGroup.isTouching(monkey)){
      
      obstacle.velocityX=0;
      banana.velocityX=0;
      ground.velocity=0;
      
    }
  
  if(FoodGroup.isTouching(monkey)){
    
    score++
    FoodGroup.destroyEach();
    
  }
  
  
  
}


 function obstacles(){
   if(frameCount % 60 === 0){
    obstacle=createSprite(600,550,10,10);
    obstacle.addImage(obstacleImage);
    obstacle.setCollider("circle",0,0,180);
    obstacle.velocityX=-10;
    obstacle.setlifetime=700; 
    obstacle.scale=0.2;
  obstaclesGroup.add(obstacle);   
   }
  
  
   
}





