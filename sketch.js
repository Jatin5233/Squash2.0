var ball,img,paddle,back_img;

function preload() {
  
squash=loadImage("paddle.png");
  ball_1=loadImage("ball.png");
  back_img=loadImage("b.png");
  hit=loadSound("hit.mp3");
  end=loadSound("mario.mp3");
}
function setup() {
  createCanvas(420, 400);
  
  b=createSprite(200,200); 
  b.addImage(back_img);
  b.scale=0.7;
  paddle=createSprite(70,200);
  paddle.addImage(squash);
  paddle.scale=1;

  ball=createSprite(350,200);
  ball.addImage(ball_1);
  ball.scale=0.5;
  
  ball.velocityX=-9;
  
}

function draw() {
  edges=createEdgeSprites();
  background(230,0,0);
 
 if(ball.isTouching(paddle)){
  hit.play();
   randomVelocity(); 
  }
   ball.bounceOff(edges[1]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);
  ball.bounceOff(paddle);
  
  
  if(keyDown(UP_ARROW))
  {
    paddle.y=paddle.y-7;
  }
  
  
  if(keyDown(DOWN_ARROW))
  {
    paddle.y=paddle.y+7;
  }
  if(ball.x<-1&&ball.x>-10){
  end.play();
  }
  
  drawSprites();
  if(ball.x<0){
    fill(0);
  textSize(50);
   text("Game Over",70,200);
    paddle.destroy();
    gamestate=end;
  
  }
 
}

function randomVelocity()
{
 ball.velocityY=random(10,-10);
}

