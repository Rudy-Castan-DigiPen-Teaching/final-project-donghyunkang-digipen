//  Donghyun Kang
//  Final Project
//  cs099
//  Spring 2020

let p = [];
let active_sign = false;

class WinScene {
  constructor() {
    const center_x = width / 2;
    this.particles = new Particle(width / 2, height / 2, 0.001, 2);
    this.mainmenu = new Button(center_x + 300, height - 50, "Main Menu");
    this.check = 0;
  }

  Update() {
    for (var i = 0; i < p.length; i++) {
      p[i].update();
      p[i].draw();
    }
    if (mouseIsPressed == true) {
      for (let i = 0; i < 1000; ++i)
        p[i] = (new Particle(width / 2, height / 2, random(3, 5), random(2 * PI)));
      active_sign = true;
      Win_sfx.play();
      Win_sfx.volume(0.3);
    }

    if (active_sign == true) {
      push();
        textSize(100);
        text("Player's Rok Win!!\n Congratulations~", width / 2, height / 2);
      pop();
    }

    if (this.mainmenu.DidClickButton()) {
      CurrentScene = MAIN_MENU;
    }
  }

  Draw() {
    DrawTitle("Click the mouse!!");
    this.mainmenu.DrawButton();
  }
}