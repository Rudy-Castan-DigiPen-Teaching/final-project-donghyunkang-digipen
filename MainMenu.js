//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

var Eye_x = 200;
var Eye_y = 160;
let Pupil_diameter = 40;
let Face_x = 200;
let Face_y = 240;


class MainMenu {
  constructor() {
    const center_x = width / 2;
    this.play_1p = new Button(center_x - 120, height * 6 / 10, "Play for 1 person");
    this.play_2p = new Button(center_x + 120, height * 6 / 10, "Play for 2 people");
    this.howto = new Button(center_x, height * 7 / 10, "How to play");
    this.options = new Button(center_x, height * 8 / 10, "Options");
    this.credits = new Button(center_x, height * 9 / 10, "Credits");
  }

  Update() {
    if (this.play_1p.DidClickButton()) {
      CurrentScene = PLAY_1p;
    } else if (this.play_2p.DidClickButton()) {
      CurrentScene = PLAY_2p;
    } else if (this.options.DidClickButton()) {
      CurrentScene = OPTIONS_SCREEN;
    } else if (this.credits.DidClickButton()) {
      CurrentScene = CREDITS_SCREEN;
    } else if (this.howto.DidClickButton()) {
      CurrentScene = HOWTO;
    }
  }

  Draw() {

    DrawTitle("Rok's Volley Pong");
    push();
      fill('white');
      ellipse(width / 2, 310, 200, 100);
      ellipse(width / 2, 160, 200, 60);
    pop();
    
    text("Welcome!!\n We are 'Rok'!!", width / 2, 150);
    text("You can change\n background color!\n in 'Options'", width / 2, 300);
    this.play_1p.DrawButton();
    this.play_2p.DrawButton();
    this.howto.DrawButton();
    this.options.DrawButton();
    this.credits.DrawButton();

    // Left - ROK

    // Face - Main
    push();
      fill('blue');
      rectMode(CENTER);
      rect(Face_x, Face_y, 360, 400);
    pop();

    // Googly eyes - Main
    push();
      fill('white');
      circle(100, 140, 100);
      circle(300, 140, 100);
    pop();

    // Googly eyes - Left pupil.
    push();
      fill(0);
      circle(Eye_x, Eye_y, Pupil_diameter);
      Eye_x = 50 + map(cos(frameCount / 50), -1, 1, 30, 80);
      Eye_y = 90 + map(sin(frameCount / 50), -1, 1, 30, 60);
    pop();

    // Googly eyes - Right Pupil.
    push();
      fill(0);
      circle(Eye_x + 200, Eye_y, Pupil_diameter);
      Eye_x = 50 + map(sin(frameCount / 50), -1, 1, 30, 80);
      Eye_y = 90 + map(cos(frameCount / 50), -1, 1, 30, 60);
    pop();

    // Mouth
    push();
      fill(242, 132, 130);
      arc(Face_x, Face_y, 200, 300, 0, PI);
    pop();

    // Teeth
    push();
      fill('white');
      square(Face_x - 40, Face_y, 40);
      square(Face_x, Face_y, 40);
    pop();

    //  Hair
    push();
      fill(0);
      arc(Face_x - 60, Face_y - 200, 30, 60, 0, PI);
      arc(Face_x - 30, Face_y - 200, 30, 60, 0, PI);
      arc(Face_x, Face_y - 200, 30, 60, 0, PI);
      arc(Face_x + 30, Face_y - 200, 30, 60, 0, PI);
      arc(Face_x + 60, Face_y - 200, 30, 60, 0, PI);
    pop();

    // Right - ROK

    // Face - Main
    push();
      fill('red');
      rectMode(CENTER);
      rect(width - Face_x, Face_y, 360, 400);
    pop();

    // Googly eyes - Main
    push();
      fill('white');
      circle(width - 100, 140, 100);
      circle(width - 300, 140, 100);
    pop();

    // Googly eyes - Left pupil.
    push();
      fill(0);
      circle(Eye_x + 800, Eye_y, Pupil_diameter);
      Eye_x = 50 + map(cos(frameCount / 50), -1, 1, 30, 80);
      Eye_y = 90 + map(sin(frameCount / 50), -1, 1, 30, 60);
    pop();

    // Googly eyes - Right Pupil.
    push();
      fill(0);
      circle(Eye_x + 600, Eye_y, Pupil_diameter);
      Eye_x = 50 + map(sin(frameCount / 50), -1, 1, 30, 80);
      Eye_y = 90 + map(cos(frameCount / 50), -1, 1, 30, 60);
    pop();

    // Mouth
    push();
      fill(242, 132, 130);
      arc(width - Face_x, Face_y, 200, 300, 0, PI);
    pop();

    // Teeth
    push();
      fill('white');
      square(width - Face_x - 40, Face_y, 40);
      square(width - Face_x, Face_y, 40);
    pop();

    //  Hair
    push();
      fill(0);
      arc(width - Face_x - 60, Face_y - 200, 30, 60, 0, PI);
      arc(width - Face_x - 30, Face_y - 200, 30, 60, 0, PI);
      arc(width - Face_x, Face_y - 200, 30, 60, 0, PI);
      arc(width - Face_x + 30, Face_y - 200, 30, 60, 0, PI);
      arc(width - Face_x + 60, Face_y - 200, 30, 60, 0, PI);
    pop();

  }
}