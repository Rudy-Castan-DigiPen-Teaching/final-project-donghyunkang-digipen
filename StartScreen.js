//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

class StartScreen {
  constructor() {
  }

  Update() {
    if(keyIsPressed == true){
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    push();
      textAlign(CENTER);
      textSize(40);
      text("Press the any key! \n Game will be start!",width/2, height/2);
    pop();
  }
}