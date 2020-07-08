//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

class Particle {
  constructor(x, y, speed, direction){
    this.position = new Vec2(x,y);
    this.velocity = new Vec2(0,0);
    this.velocity.setLength(speed);
    this.velocity.setAngle(direction);
  }

  update(){
    this.position.addTo(this.velocity);
  }
  
  draw(){
    push();
      stroke('#7A3B32');
      fill(random(255),random(255),random(255));
      strokeWeight(1);
      circle(this.position.x, this.position.y, 5);
    pop();
  }
}