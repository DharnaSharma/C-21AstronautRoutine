var abath,bathImg;
var abrush,brushImg;
var asleep,sleepImg;
var amove,moveImg;
var adrink,drinkImg;
var aeat,eatImg;
var agym,gymImg;
var issbk,issImg;

var astronaut,instrBtn,instrBtnImg;

var gameState=PLAY;
var PLAY=1;
var END=0;

var flag=0;

function preload(){

  bathImg=loadAnimation("images/bath1.png","images/bath2.png");
  brushImg=loadImage("images/brush.png");
  drinkImg=loadAnimation("images/drink1.png","images/drink2.png");
  eatImg=loadAnimation("images/eat1.png","images/eat2.png");
  gymImg=loadAnimation("images/gym1.png","images/gym2.png","images/gym11.png","images/gym12.png");
  moveImg=loadAnimation("images/move.png","images/move1.png");
  sleepImg=loadAnimation("images/sleep.png");
  issImg=loadImage("images/iss.png");
  instrBtnImg=loadImage("images/instruction.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
  issbk=createSprite(width/2,height/2);
  issbk.addImage(issImg);
//  issbk.scale=0.2;
  issbk.visible=false;
  
  astronaut=createSprite(width/2,height/2);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale=0.08;
  
  instrBtn=createSprite(120,100);
  instrBtn.addImage(instrBtnImg);
  instrBtn.visible=true;
  instrBtn.scale=0.5;
  
  astronaut.visible=false;
}

function draw() {
  
  background("issbk");
  
  
    issbk.visible=true;
    astronaut.visible=true;  
    edges=createEdgeSprites();
    astronaut.collide(edges);
  instrBtn.depth=astronaut.depth;
  astronaut.depth+=1;
    
    if(keyDown("UP_ARROW")){
      astronaut.addAnimation("brushing",brushImg);
      astronaut.changeAnimation("brushing");
      astronaut.y=3*height/4;
        astronaut.velocityX=-2;
      astronaut.velocityY=-2;
      
    }else
    if(keyDown("DOWN_ARROW")){
      astronaut.addAnimation("gyming",gymImg);
      astronaut.changeAnimation("gyming");
      astronaut.y=3*height/4;
      astronaut.velocityX=-1;
      astronaut.velocityY=-2;
      
    }else
    if(keyDown("LEFT_ARROW")){
      astronaut.addAnimation("eating",eatImg);
      astronaut.changeAnimation("eating");
      astronaut.y=2*height/4;
      astronaut.velocityX=0;
      astronaut.velocityY=0;
      
    }else
    if(keyDown("RIGHT_ARROW")){
      astronaut.addAnimation("bathing",bathImg);
      astronaut.changeAnimation("bathing");
      astronaut.y=height/4;;
      astronaut.velocityX=1;
      astronaut.velocityY=1;
      
    }else
    if(keyDown("m")){
      astronaut.addAnimation("moving",moveImg);
      astronaut.changeAnimation("moving");
      astronaut.y=3*height/4;;
      astronaut.velocityX=1;
      astronaut.velocityY=-1;
      
    }else
      if(keyDown("SPACE"))
      {
        astronaut.addAnimation("sleeping",sleepImg);
        astronaut.changeAnimation("sleeping");
        astronaut.x=width/3;
        astronaut.y=height/2;;
        astronaut.velocityX=1;
        //astronaut.velocityY=-1
    
      }
     
  //} 
  
  textSize(30);
    fill("purple");
    text("Astronaut Daily Routine",width/2 - 100,30);
  
  drawSprites();
  
}
