/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class InstructionsButton extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./InstructionsButton/costumes/costume1.svg", {
        x: 91.25,
        y: -73.25
      })
    ];

    this.sounds = [new Sound("pop", "./InstructionsButton/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = true;
  }

  *whenthisspriteclicked() {
    this.stage.costume = "instruction page 1";
    this.visible = false;
  }

  *whenbackdropswitchesto1() {
   ()
    this.visible = false;
  }

  *whenbackdropswitchesto2() {
    this.visible = false;
  }

  *whenbackdropswitchesto3() {
    this.visible = true;
  }
}
