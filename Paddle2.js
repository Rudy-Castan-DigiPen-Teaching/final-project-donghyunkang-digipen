

class Paddle2 {
  
  constructor(y) {
    this.x = 3 * width / 4;
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
    if (this.x > width / 2) {
      this.x -= 4;
    }
  }

  right() {
    if (this.x < width - this. width){
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