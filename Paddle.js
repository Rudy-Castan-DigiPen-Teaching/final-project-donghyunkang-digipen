// Donghyun kang
// Project Checkpoint: Prototype
// cs099
// Spring 2020

class Paddle {
  
  constructor(y) {
    this.x = width / 4;
    this.y = y;
    this.height = 60;
    this.width = 80;
    
    this.isLeft = false;
    this.isRight = false;
  }

  display() {
    fill(0);
    rect(this.x, this.y, this.width, this.height);
  }

  left() {
    if (this.x > 0) {
      this.x -= 4;
    }
  }

  right() {
    if (this.x < width / 2 - this. width){
      this.x += 4;
    }
  }
  
  update() {
  if (this.isLeft) {
    this.left();
  } else if (this.isRight) {
    this.right();
  }
}
}