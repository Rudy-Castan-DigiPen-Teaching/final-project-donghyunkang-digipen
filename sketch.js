//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

let BackgroundColor = 'beige';
let CurrentScene = START_SCREEN;

let MainMenuScene;
let CreditsScene;
let OptionsScene;
let play_1p;
let play_2p;
let win;
let lose;
let howto;

// ++
let playerPaddle;
let aiPaddle2;
let ball;
let net;
let solo_score = 0;
let ai_score = 0;
let left_score = 0;
let right_score = 0;
let End_score = 5;

function setup() {
  createCanvas(1000, 800);
  MainMenuScene = new MainMenu();
  CreditsScene = new CreditsScreen();
  OptionsScene = new OptionsScreen();
  play_1p = new PlayScene_1();
  play_2p = new PlayScene_2();
  win = new WinScene();
  lose = new LoseScene();
  win_l = new Win_left();
  win_r = new Win_right();
  howto = new HowtoScene();
  start = new StartScreen();

  // ++
  textAlign(CENTER);
  textSize(20);
  playerPaddle = new Paddle(height - 70);
  aiPaddle2 = new Paddle2(height - 70);
  playerPaddle2 = new Paddle2(height - 70);
  ball = new Ball();
  net = new Net(650);
}

function draw() {
  background(BackgroundColor);
  switch (CurrentScene) {
    case MAIN_MENU:
      back_music.loop();
      back_music.volume(0.3);
      reset_score();
      ball.reset();
      MainMenuScene.Update();
      MainMenuScene.Draw();
      break;
    case CREDITS_SCREEN:
      CreditsScene.Update();
      CreditsScene.Draw();
      break;
    case OPTIONS_SCREEN:
      OptionsScene.Update();
      OptionsScene.Draw();
      break;
    case PLAY_1p:
      back_music.stop();
      play_scene_1();
      ai_battle();
      play_1p.Draw();
      play_1p.Update();
      break;
    case PLAY_2p:
      back_music.stop();
      play_scene_2();
      pvp_battle();
      play_2p.Update();
      play_2p.Draw();
      break;
    case WIN_ai:
      win.Update();
      win.Draw();
      break;
    case LOSE_ai:
      lose.Update();
      lose.Draw();
      break;
    case WIN_left:
      win_l.Update();
      win_l.Draw();
      break;
    case WIN_right:
      win_r.Update();
      win_r.Draw();
      break;
    case HOWTO:
      howto.Update();
      howto.Draw();
      break;
    case START_SCREEN:
      start.Update();
      start.Draw();
  }

  if (CurrentScene == PLAY_1p) {
    left_score = 0;
    right_score = 0;
  } else if (CurrentScene == PLAY_2p) {
    solo_score = 0;
    ai_score = 0;
  }

}

// ++
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

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    playerPaddle2.isLeft = true;
  } else if (keyCode == RIGHT_ARROW) {
    playerPaddle2.isRight = true;
  }

  if (keyCode == UP_ARROW) {
    playerPaddle2.isJump = true;
  }

  if (keyCode == 65) {
    playerPaddle.isLeft = true;
  } else if (keyCode == 68) {
    playerPaddle.isRight = true;
  }

  if (keyCode == 87) {
    playerPaddle.isJump = true;
  }

}

function keyReleased() {
  if (keyCode == LEFT_ARROW) {
    playerPaddle2.isLeft = false;
  } else if (keyCode == RIGHT_ARROW) {
    playerPaddle2.isRight = false;
  }
  if (keyCode == UP_ARROW) {
    playerPaddle2.isJump = false;
  }

  if (keyCode == 65) {
    playerPaddle.isLeft = false;
  } else if (keyCode == 68) {
    playerPaddle.isRight = false;
  }
  if (keyCode == 87) {
    playerPaddle.isJump = false;
  }
}

function play_scene_1() {
  background(BackgroundColor);
  line(500, 0, 500, 800);

  ball.update();
  ball.display();

  ball.hasHitPlayer2(playerPaddle);
  ball.hasHitAi(aiPaddle2);

  playerPaddle.display();
  aiPaddle2.display();
  net.display();

  playerPaddle.update();
  aiPaddle2.update();

  processAI_2();



}

function play_scene_2() {
  background(BackgroundColor);
  line(500, 0, 500, 800);

  playerPaddle.display();
  playerPaddle2.display();
  net.display();

  playerPaddle.update();
  playerPaddle2.update();

  ball.update();
  ball.display();

  ball.hasHitPlayer2(playerPaddle);
  ball.hasHitRight(playerPaddle2);

}

function ai_battle() {
  if (solo_score == End_score) {
    CurrentScene = WIN_ai;
    reset_score()
  } else if (ai_score == End_score) {
    CurrentScene = LOSE_ai;
    reset_score()
  }
}

function pvp_battle() {
  if (left_score == End_score) {
    CurrentScene = WIN_left;
    reset_score()
  } else if (right_score == End_score) {
    CurrentScene = WIN_right;
    reset_score()
  }
}

function reset_score() {
  left_score = 0;
  right_score = 0;
  solo_score = 0;
  ai_score = 0;
  active_sign = false;

}

function DrawRok_red(baseX, baseY) {

  let face_color;

  push();
  translate(baseX, baseY);

  var Eye_x = 0;
  var Eye_y = 0;
  let Pupil_diameter = 40;
  let Face_x = 200;
  let Face_y = 240;

  Eye_x = 10 + map(cos(frameCount / 50), -1, 1, 30, 80) * 1 / 4;
  Eye_y = -10 + map(sin(frameCount / 50), -1, 1, 30, 60) * 2 / 9;
  // Left - ROK 1/4 2/9

  // Face - Main
  push();
  fill('red');
  rectMode(CENTER);
  rect(40, 20, 80, 100);
  pop();

  // Googly eyes - Main
  push();
  fill('white');
  circle(20, 0, 100 * 1 / 4);
  circle(60, 0, 100 * 1 / 4);
  pop();

  // Googly eyes - Left pupil.
  push();
  fill(0);
  circle(Eye_x, Eye_y, Pupil_diameter * 1 / 4);
  pop();

  // Googly eyes - Right Pupil.
  push();
  fill(0);
  circle(Eye_y + 60, Eye_x - 20, Pupil_diameter * 1 / 4);
  pop();

  // Mouth
  push();
  fill(242, 132, 130 * 1 / 4);
  arc(40, 25, 200 * 1 / 4, 300 * 2 / 9, 0, PI);
  pop();

  // Teeth
  push();
  fill('white');
  square(30, 25, 40 * 2 / 9);
  square(40, 25, 40 * 2 / 9);
  pop();

  //  Hair'
  push();
  fill(0);
  arc((160 - 60) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  arc((160 - 30) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  arc((160) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  arc((160 + 30) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  arc((160 + 60) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  pop();

  pop();
}

function DrawRok_blue(baseX, baseY) {

  let face_color;

  push();
  translate(baseX, baseY);

  var Eye_x = 0;
  var Eye_y = 0;
  let Pupil_diameter = 40;
  let Face_x = 200;
  let Face_y = 240;

  Eye_x = 10 + map(cos(frameCount / 50), -1, 1, 30, 80) * 1 / 4;
  Eye_y = -10 + map(sin(frameCount / 50), -1, 1, 30, 60) * 2 / 9;
  // Left - ROK 1/4 2/9

  // Face - Main
  push();
  fill('blue');
  rectMode(CENTER);
  rect(40, 20, 80, 100);
  pop();

  // Googly eyes - Main
  push();
  fill('white');
  circle(20, 0, 100 * 1 / 4);
  circle(60, 0, 100 * 1 / 4);
  pop();

  // Googly eyes - Left pupil.
  push();
  fill(0);
  circle(Eye_x, Eye_y, Pupil_diameter * 1 / 4);
  pop();

  // Googly eyes - Right Pupil.
  push();
  fill(0);
  circle(Eye_y + 60, Eye_x - 20, Pupil_diameter * 1 / 4);
  pop();

  // Mouth
  push();
  fill(242, 132, 130 * 1 / 4);
  arc(40, 25, 200 * 1 / 4, 300 * 2 / 9, 0, PI);
  pop();

  // Teeth
  push();
  fill('white');
  square(30, 25, 40 * 2 / 9);
  square(40, 25, 40 * 2 / 9);
  pop();

  //  Hair'
  push();
  fill(0);
  arc((160 - 60) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  arc((160 - 30) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  arc((160) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  arc((160 + 30) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  arc((160 + 60) * 1 / 4, -30, 30 * 1 / 4, 60 * 2 / 9, 0, PI);
  pop();

  pop();
}