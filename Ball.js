// Donghyun kang
// Project Checkpoint: Prototype
// cs099
// Spring 2020

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

    // if it goes to the end of the sreen restart the game
    if (this.x < width / 2 && this.y > height - this.r) {
      this.reset();
      print("Right got point");
      score2 = score2 + 1;
    } else if (this.x > width / 2 && this.y > height - this.r) {
      this.reset();
      print("Left got point");
      score1 = score1 + 1;
    }
    this.x += this.xSpeed;
    this.y += this.ySpeed;

  }

  reset() {
    this.x = width / 2;
    this.y = height / 2 - 100;

    this.xSpeed = random(5, 7);

    // determines if it's going left or right
    let isUp = random(1) > .5;
    if (isUp) {
      this.ySpeed = -this.ySpeed;
      this.xSpeed = -this.xSpeed;
    }

    this.ySpeed = random(-3, -1);
  }

  display() {
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  hasHitAi(ai) {
    if (this.y + this.r >= ai.y && this.y <= ai.y + ai.height) {
      if (this.isSameWidth(ai)) {
        this.ySpeed = -this.ySpeed;
      }
    }
  }

  isSameWidth(player) {
    return this.x >= player.x && this.x <= player.x + player.width
  }

  hasHitPlayer2(player2) {
    if (this.y + this.r >= player2.y && this.y <= player2.y + player2.height) {
      if (this.isSameWidth2(player2)) {
        this.ySpeed = -this.ySpeed;
      }
    }
  }

  isSameWidth2(player2) {
    return this.x >= player2.x && this.x <= player2.x + player2.width
  }

  hasHitNet(net) {
    if (this.x + this.r >= net.x && this.x < width / 2) {
      if (this.y > 500) {
        this.xSpeed = -this.xSpeed + 1;
        this.ySpeed = 3;
      }
    }

    if (this.x - this.r <= net.x && this.x > width / 2) {
      if (this.y > 500) {
        this.xSpeed = -this.xSpeed + 1;
        this.ySpeed = 3;
      }
    }
  }
}