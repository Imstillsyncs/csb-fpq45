/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Bullet extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Bullet/costumes/costume1.svg", { x: 10, y: 4 })
    ];

    this.sounds = [new Sound("pop", "./Bullet/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.CLONE_START, this.startAsClone)
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *startAsClone() {
    this.visible = true;
    /* TODO: Implement looks_gotofrontback */ null;
    this.goto(this.sprites["Player1"].x, this.sprites["Player1"].y);
    this.direction = this.sprites["Player1"].direction;
    this.direction += 90;
    this.move(1);
    this.direction -= 90;
    while (
      !(
        this.touching(this.sprites[undefined].andClones()) ||
        this.touching(this.sprites["Player2"].andClones()) ||
          this.touching(this.sprites["Walls"].andClones())
      )
    ) {
      this.move(12);
      yield;
    }
    this.deleteThisClone();
  }
}
