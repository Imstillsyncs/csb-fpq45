/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class BackToMenu3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./BackToMenu3/costumes/costume1.svg", {
        x: 24.752839311158084,
        y: 179.0126979304696
      })
    ];

    this.sounds = [new Sound("pop", "./BackToMenu3/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "Menu";
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }
}
