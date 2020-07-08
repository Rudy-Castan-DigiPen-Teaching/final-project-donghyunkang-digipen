//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

let xgap = 200;
let ygap = 110;

class LoseScene {
  constructor() {
    const center_x = width / 2;
    this.mainmenu = new Button(center_x + 300, height - 50, "Main Menu");
    this.check = 0;
  }

  Update() {

    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
    }

    if (mouseIsPressed == true) {
      Lose_sfx.play();
      Lose_sfx.volume(0.3);
      active_sign = true;
    }

    if (active_sign == true) {
      for (let val_y = 0; val_y < 5; val_y++) {
        for (let val_x = 0; val_x < 4; val_x++) {
          push();
          fill(0);
          textSize(40);
          text("You Lose!", 200 + val_x * xgap, 150 + val_y * ygap);
          pop();
        }
      }
    }
  }

  Draw() {
    DrawTitle("Click the mouse!");
    this.mainmenu.DrawButton();
  }
}