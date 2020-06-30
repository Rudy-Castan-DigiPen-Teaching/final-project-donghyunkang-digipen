// Donghyun kang
// Project Checkpoint: Prototype
// cs099
// Spring 2020

class Net {
  
  constructor(y) {
    this.x = width / 2;
    this.y = y;
    this.height = 300;
    this.width = 20;
  }

  display() {
    push();
     fill(0);
     rectMode(CENTER);
     rect(this.x, this.y, this.width, this.height);
    pop();
  }
  
}