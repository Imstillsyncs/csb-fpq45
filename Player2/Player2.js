/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("connected ", "./Player2/costumes/connected .svg", {
        x: 10,
        y: 10
      }),
      new Costume("connecting", "./Player2/costumes/connecting.svg", {
        x: 10,
        y: 10
      }),
      new Costume("Not connected", "./Player2/costumes/Not connected.svg", {
        x: 0,
        y: 0
      }),
      new Costume("Full", "./Player2/costumes/Full.svg", { x: 0, y: 0 }),
      new Costume(
        "No one else is on",
        "./Player2/costumes/No one else is on.svg",
        { x: -131.18468468468456, y: 264.7477477477477 }
      ),
      new Costume(
        "Someone else is on",
        "./Player2/costumes/Someone else is on.svg",
        { x: -124.62537537537537, y: 265.2484984984985 }
      )
    ];

    this.sounds = [new Sound("pop", "./Player2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "Join" }, this.whenIReceiveJoin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "joined" },
        this.whenIReceiveJoined
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "joined" },
        this.whenIReceiveJoined2
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "joined" },
        this.whenIReceiveJoined3
      )
    ];
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveJoin() {
    while (true) {
      if (this.stage.vars.playerId == 2) {
        while (true) {
          this.stage.vars.Player2Check += 1;
          yield* this.wait(1);
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveJoined() {
    this.costume = "connected ";
    yield* this.wait(1);
    if (this.stage.vars.playerId == 2) {
      while (true) {
        if (this.keyPressed("e")) {
          this.sprites["Bullet"].createClone();
          yield* this.wait(0.6);
        }
        if (this.keyPressed("d")) {
          this.x += 3;
        }
        if (this.keyPressed("a")) {
          this.x += -3;
        }
        if (this.keyPressed("s")) {
          this.y += -3;
        }
        if (this.keyPressed("w")) {
          this.y += 3;
        }
        this.stage.vars.Player2Coords = "" + (this.x + 500) + (this.y + 500);
        yield;
      }
    } else {
      while (true) {
        this.goto(
          "" +
            this.stage.vars.Player2Coords[1 - 1] +
            ("" +
              this.stage.vars.Player2Coords[2 - 1] +
              this.stage.vars.Player2Coords[3 - 1]) -
            500,
          "" +
            this.stage.vars.Player2Coords[4 - 1] +
            ("" +
              this.stage.vars.Player2Coords[5 - 1] +
              this.stage.vars.Player2Coords[6 - 1]) -
            500
        );
        yield;
      }
    }
  }

  *whenIReceiveJoined2() {
    while (true) {
      this.goto(198, 136);
      yield;
    }
  }

  *whenIReceiveJoined3() {
    if (
      this.stage.vars.playerId == 2 &&
      (this.stage.vars.Player1Check == this.stage.vars.localPlayer2Check ||
        this.stage.vars.playerId == 1) &&
      this.stage.vars.Player2Check == this.stage.vars.localPlayer2Check
    ) {
      this.costume = "No one else is on";
    } else {
      this.costume = "Someone else is found";
    }
    yield* this.wait(1);
    this.visible = false;
  }

  *whenbackdropswitchesto() {
    this.goto(-206, -137);
    /* TODO: Implement looks_gotofrontback */ null;
    this.visible = true;
    this.costume = "connecting";
  }
}
