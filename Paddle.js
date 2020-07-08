//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

class Paddle {

  constructor(y) {
    this.x = width / 4;
    this.y = y;
    this.height = 60;
    this.width = 80;

    this.isLeft = false;
    this.isRight = false;
    this.isJump = false;
  }

  display() {
    DrawRok_blue(this.x, this.y);
  }

  left() {
    if (this.x > 0) {
      this.x -= 6;
    }
  }

  right() {
    if (this.x < width / 2 - this.width) {
      this.x += 6;
    }
  }

  jump() {
    if (this.y > 500) {
      this.y -= 8;
    }
  }

  update() {
    if (this.isLeft) {
      this.left();
    } else if (this.isRight) {
      this.right();
    } else if (this.isJump) {
      this.jump();
    }
    if (this.y < height - 70) {
      this.y = this.y + 10 * (deltaTime / 50);
    }
  }
}