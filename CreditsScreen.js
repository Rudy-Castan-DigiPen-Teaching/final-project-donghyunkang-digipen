//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

class CreditsScreen {
  constructor() {
    this.mainmenu = new Button(width / 2, height - 50, "Main Menu");
  }

  Update() {
    if (this.mainmenu.DidClickButton()) {
      console.log("Main Menu!");
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {

    DrawTitle("Credits");

    push();
      textAlign(CENTER);
      fill(0);
      textSize(30);
      text("Made by Donghyun Kang\n (donghyun.kang)\n Thank you everyone!\n\n Thanks to \n Rudy Darth Castan\n Minui Lee\n\n and My friend\n Wonjune Cho \n\n 'Game_back_wonjun_cho.m4a' is from Wonjune Cho \n\n 'Hit_Hurt4.wav' and 'score.wav' \n 'Win_effect.wav' and 'Lose_effect.wav'\n is from Donghyun Kang.", width / 2, height / 6);
    pop();

    this.mainmenu.DrawButton();
  }
}