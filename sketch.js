// Donghyun kang
// Project Checkpoint: Prototype
// cs099
// Spring 2020

let playerPaddle;
let aiPaddle2;
let ball;
let net;
let score1 = 0;
let score2 = 0;

let settings = {
    scenes : 0
}

function setup() {
  createCanvas(1000, 800);
  textAlign(CENTER);
  textSize(20);
  playerPaddle = new Paddle(height - 70);
  aiPaddle2 = new Paddle2(height - 70);
  ball = new Ball();
  net = new Net(650);
}

function draw() {
    play_scene()
    battle()
    result_of_battle()
}

function processAI_2() {
  let middleOfPaddle = aiPaddle2.x + aiPaddle2.width / 2;
     
  if (middleOfPaddle > ball.x) {
    aiPaddle2.isLeft = true;
    aiPaddle2.isRight = false;
  } else {
    aiPaddle2.isRight = true;
    aiPaddle2.isLeft = false;
  }
}

function keyPressed(){
  if (keyCode == LEFT_ARROW) {
    playerPaddle.isLeft = true;
  } else if (keyCode == RIGHT_ARROW) {
    playerPaddle.isRight = true;
  }

  if (keyCode == 82){
    if (settings.scenes == 1 || settings.scenes == 2) {
        settings.scenes = 0;
        score1 = 0;
        score2 = 0;
    } else if (settings.scenes == 0) {
        intro_scene();
  }

  }
}

function keyReleased() {
  if (keyCode == LEFT_ARROW){
    playerPaddle.isLeft = false;
  } else if (keyCode == RIGHT_ARROW){
    playerPaddle.isRight = false;
  }
}

function play_scene() {
  background('beige');
  line(500,0,500,800);
  
  playerPaddle.display();
  aiPaddle2.display();
  net.display();
  
  playerPaddle.update();
  aiPaddle2.update();

  processAI_2();
  
  ball.update();
  ball.display();
  
  ball.hasHitPlayer2(playerPaddle); 
  ball.hasHitAi(aiPaddle2);
  ball.hasHitNet(net);

  text(score1, 10,30);
  text(score2, width-10,30);
  text("This is 3 points match \n for prototype.", width /2, 20);
}

function battle(){
    if(score1 == 3){
        settings.scenes = 1
    } else if (score2 == 3){
        settings.scenes = 2
    }
}

function result_of_battle(){
    if (settings.scenes == 1){
        score1 = 0;
        score2 = 0;
        print(score1,score2);
        background('Green');
        text("Player is win!! \n Press 'r' to restart!",width /2, height/2);
    }

    if (settings.scenes == 2){
        score1 = 0;
        score2 = 0;
        print(score1,score2);
        background('Red');
        text("AI is win!! You lose \n Press 'r' to restart!", width/2, height/2);
    }

}