/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class PlayButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./PlayButton/costumes/costume1.svg", {
        x: 55.75,
        y: -50.25
      })
    ];

    this.sounds = [new Sound("pop", "./PlayButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenbackdropswitchestoGame() {
    this.visible = false;
  }

  *whenthisspriteclicked() {
    this.visible = false;
    this.stage.costume = "Game";
  }

  *whenbackdropswitchestoinstructionspage2() {
    this.visible = false;
  }

  *whenbackdropswitchestoMenu() {
    this.visible = true;
  }
}
