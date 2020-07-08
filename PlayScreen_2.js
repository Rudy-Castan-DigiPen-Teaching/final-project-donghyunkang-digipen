//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

class PlayScene_2 {
  constructor() {
    const center_x = width / 2;
    this.mainmenu = new Button(width/2 - 320, 50, "Main Menu");
    this.check = 0;
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    DrawTitle("   Blue Rok_Left vs Right_Red Rok \n 5 points Match");
    this.mainmenu.DrawButton();
    
    push();
      textSize(40);
      fill(0);
      text(left_score, 40, 60);
      text(right_score, width - 40, 60);
    pop();
  }
}