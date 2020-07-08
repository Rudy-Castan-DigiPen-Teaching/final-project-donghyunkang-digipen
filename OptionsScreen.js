//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

class OptionsScreen {
  constructor() {
    const center_x = width / 2;
    this.background = new Button(center_x, height * 3 / 6, "Random Color");
    this.backBeige = new Button(center_x, height * 4 / 6, "Beige");
    this.mainmenu = new Button(width - 150, height - 50, "Main Menu");
  }

  Update() {
    if (this.background.DidClickButton()) {
      BackgroundColor = color(random(255), random(255), random(255));
    } else if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
    } else if (this.backBeige.DidClickButton()) {
      BackgroundColor = 'beige';
    }
  }

  Draw() {
    DrawTitle("Options");
    this.background.DrawButton();
    this.mainmenu.DrawButton();
    this.backBeige.DrawButton();
  }
}