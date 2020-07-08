//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

class Vec2{ 
  constructor(x=0,y=0){
    this.x=x;
    this.y=y;
  }
 
  getAngle(){
    return atan2(this.y,this.x);
  }
 
  setAngle(angle_in_radians){
    var length=this.getLength();
    this.x=cos(angle_in_radians)* length;
    this.y=sin(angle_in_radians)* length; 
  }
 
  getLength(){
    return sqrt(this.x * this.x + this.y * this.y);
  }
 
  setLength(length){
    var angle = this.getAngle();
    this.x = cos(angle) * length;
    this.y = sin(angle) * length;
  }
 
  add(v2){
    return new Vec2(this.x + v2.x, this.y + v2.y);
  }

  subtract(v2){
    return new Vec2(this.x - v2.x, this.y - v2.y);
  }

  multiply(val){
    return  new Vec2(this.x * val, this.y * val);
  }

  divide(scalar){
    return new Vec2(this.x / scalar, this.y / scalar);
  }

  addTo(v2){
    this.x +=v2.x;
    this.y +=v2.y;
  }

  subtractFrom(v2){
    this.x = this.x - v2.x;
    this.y = this.y - v2.y;
  }

  multiplyBy(scalar){
    this.x = this.x * scalar;
    this.y = this.y * scalar;
  }

  divideBy(scalar){
    this.x = this.x / scalar;
    this.y = this.y / scalar;
  }
 
}