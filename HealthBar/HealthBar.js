/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class HealthBar extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./HealthBar/costumes/costume1.svg", {
        x: 0,
        y: 0
      })
    ];

    this.sounds = [new Sound("pop", "./HealthBar/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenbackdropswitchesto() {
    this.visible = true;
  }

  *drawbar() {
    this.penDown = false;
    this.goto(-193, -170);
    this.penSize = 12;
    this.penColor = Color.rgb(0, 0, 0);
    this.penDown = true;
    this.x += 150;
    this.penDown = false;
  }

  *drawprogress() {
    yield* this.drawbar();
    this.penDown = false;
    this.goto(-193, -170);
    this.penSize = 7;
    this.penColor = Color.rgb(44, 253, 93);
    this.x += (this.stage.vars.hp * 170) / 0;
    this.penDown = true;
  }

  *whenGreenFlagClicked() {
    while (true) {
      if ("(hp)" > "(hpmax)") {
        this.stage.vars.hp = "hpmax";
      }
      if ("(hp)" < 0) {
        this.stage.vars.hp = 0;
      }
      yield* this.drawbar();
      yield* this.drawprogress();
      yield;
    }
  }
}
