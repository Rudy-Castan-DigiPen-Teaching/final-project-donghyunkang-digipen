//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

class HowtoScene {
  constructor() {
    const center_x = width / 2;
    this.mainmenu = new Button(width - 150, height - 50, "Main Menu");
    this.check = 0;
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    DrawTitle("How to play!");

    push();
      textAlign(CENTER);
      fill(0);
      textSize(30);
      text('Single_Player \n Left_Player', width * 1 / 4, height / 5);
      text('Right_Player', width * 3 / 4, height / 5);
      
      text("This game is 5 points match!\n Center long rectangle is net and it is randomly give the ball.\nIf the ball hits the other's floor, you'll get a point.", width/2, height * 4/5 - 50);
    pop();

    push();
      rectMode(CENTER);
      textAlign(CENTER);
      textSize(40);
      square(width * 1 / 4, height * 2 / 5, 80);
      square(width * 1 / 4 - 90, height * 2 / 5 + 90, 80);
      square(width * 1 / 4 + 90, height * 2 / 5 + 90, 80);

      text('A', width * 1 / 4 - 90, height * 2 / 5 + 90);
      text('W', width * 1 / 4, height * 2 / 5);
      text('D', width * 1 / 4 + 90, height * 2 / 5 + 90);


      text('Left', width * 1 / 4 - 90, height * 2 / 5 + 90 + 40);
      text('Jump', width * 1 / 4, height * 2 / 5 + 40);
      text('Right', width * 1 / 4 + 90, height * 2 / 5 + 90 + 40);

      square(width * 3 / 4, height * 2 / 5, 80);
      square(width * 3 / 4 - 90, height * 2 / 5 + 90, 80);
      square(width * 3 / 4 + 90, height * 2 / 5 + 90, 80);

      text('←', width * 3 / 4 - 90, height * 2 / 5 + 90);
      text('↑', width * 3 / 4, height * 2 / 5);
      text('→', width * 3 / 4 + 90, height * 2 / 5 + 90);

      text('Left', width * 3 / 4 - 90, height * 2 / 5 + 90 + 40);
      text('Jump', width * 3 / 4, height * 2 / 5 + 40);
      text('Right', width * 3 / 4 + 90, height * 2 / 5 + 90 + 40);
    pop();
    
    this.mainmenu.DrawButton();
  }
}