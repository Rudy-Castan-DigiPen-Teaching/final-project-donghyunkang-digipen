//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

var ball_Eye_x = 0;
var ball_Eye_y = 0;

class Ball {

  constructor() {
    this.r = 50;
    this.reset();
  }

  update() {
    // if it hits the top or bottom change direction
    if (this.y < this.r || this.y > height - this.r) {
      this.ySpeed = -this.ySpeed;
    }

    if (this.x < this.r || this.x + this.r > width) {
      this.xSpeed = -this.xSpeed;
    }

    if (this.x == width / 2 && this.y > 500) {
      this.xSpeed = -this.xSpeed;
    }

    // if it goes to the end of the screen restart the game
    if (this.x < width / 2 && this.y > height - this.r) {
      this.reset();
      Score_sfx.play();
      Score_sfx.volume(0.3);
      right_score = right_score + 1;
      ai_score = ai_score + 1;
    } else if (this.x > width / 2 && this.y > height - this.r) {
      this.reset();
      Score_sfx.play();
      Score_sfx.volume(0.3);
      left_score = left_score + 1;
      solo_score = solo_score + 1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  reset() {
    this.x = width / 2;
    this.y = height / 2 - 100;

    this.xSpeed = random(10, 12);

    // determines if it's going left or right
    let isUp = random(1) > .5;
    if (isUp) {
      this.ySpeed = -this.ySpeed;
      this.xSpeed = -this.xSpeed;
    }
    this.ySpeed = random(-6, -3);
  }

  display() {
    push();
    fill('black')
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
    ball_Eye_x = this.x + 10 + map(cos(frameCount / 50), -1, 1, 30, 80) * 1 / 4;
    ball_Eye_y = this.y - 10 + map(sin(frameCount / 50), -1, 1, 30, 60) * 2 / 9;
    pop();

    // Googly eyes - Main
    push();
    fill('white');
    circle(this.x - 20, this.y, 100 * 1 / 4);
    circle(this.x + 20, this.y, 100 * 1 / 4);
    pop();

    // Googly eyes - Left pupil.
    push();
    fill(0);
    circle(ball_Eye_x - 40, ball_Eye_y, Pupil_diameter * 1 / 4);
    pop();

    // Googly eyes - Right Pupil.
    push();
    fill(0);
    circle(ball_Eye_x, ball_Eye_y, Pupil_diameter * 1 / 4);
    pop();
  }

  hasHitAi(ai) {
    if (this.y + this.r >= ai.y && this.y <= ai.y + ai.height) {
      if (this.isSameWidth(ai)) {
        this.ySpeed = -this.ySpeed;
        Hit_sfx.play();
        Hit_sfx.volume(0.3);
      }
    }
  }

  isSameWidth(player) {
    return this.x >= player.x && this.x <= player.x + player.width
  }

  hasHitRight(right) {
    if (this.y + this.r >= right.y && this.y <= right.y + right.height) {
      if (this.isSameWidth(right)) {
        this.ySpeed = -this.ySpeed;
        Hit_sfx.play();
        Hit_sfx.volume(0.3);
      }
    }
  }

  isSameWidth(player3) {
    return this.x >= player3.x && this.x <= player3.x + player3.width
  }

  hasHitPlayer2(player2) {
    if (this.y + this.r >= player2.y && this.y <= player2.y + player2.height) {
      if (this.isSameWidth2(player2)) {
        this.ySpeed = -this.ySpeed;
        Hit_sfx.play();
        Hit_sfx.volume(0.3);
      }
    }
  }

  isSameWidth2(player2) {
    return this.x >= player2.x && this.x <= player2.x + player2.width
  }
}