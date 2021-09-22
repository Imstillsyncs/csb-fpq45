/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Player1 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("connected", "./Player1/costumes/connected.svg", {
        x: 10,
        y: 10
      }),
      new Costume("connecting", "./Player1/costumes/connecting.svg", {
        x: 10,
        y: 10
      }),
      new Costume("Not connected", "./Player1/costumes/Not connected.svg", {
        x: 0,
        y: 0
      }),
      new Costume("Full", "./Player1/costumes/Full.svg", { x: 0, y: 0 }),
      new Costume(
        "No one else is on",
        "./Player1/costumes/No one else is on.svg",
        { x: -95.89931870652379, y: 228.6989677177177 }
      ),
      new Costume(
        "Someone else is found",
        "./Player1/costumes/Someone else is found.svg",
        { x: -117.11786786786786, y: 217.20045045045046 }
      )
    ];

    this.sounds = [new Sound("pop", "./Player1/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.BROADCAST, { name: "Join" }, this.whenIReceiveJoin),
      new Trigger(
        Trigger.BROADCAST,
        { name: "joined" },
        this.whenIReceiveJoined
      ),
      new Trigger(Trigger.BROADCAST, { name: "Join" }, this.whenIReceiveJoin2),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.BROADCAST, { name: "full" }, this.whenIReceiveFull),
      new Trigger(
        Trigger.BROADCAST,
        { name: "not connected" },
        this.whenIReceiveNotConnected
      ),
      new Trigger(
        Trigger.BROADCAST,
        { name: "joined" },
        this.whenIReceiveJoined2
      )
    ];
  }

  *whenIReceiveJoin() {
    this.visible = true;
    while (true) {
      if (this.stage.vars.playerId == 1) {
        while (true) {
          this.stage.vars.Player1Check += 1;
          yield* this.wait(1);
          yield;
        }
      }
      yield;
    }
  }

  *whenIReceiveJoined() {
    this.costume = "connected";
    yield* this.wait(1);
    if (this.stage.vars.playerId == 1) {
      while (true) {
        if (this.keyPressed("e")) {
          this.sprites["Bullet"].createClone();
          yield* this.wait(0.6);
        }
        if (this.keyPressed("d")) {
          this.x += 3;
          if (this.touching(this.sprites["Walls"].andClones())) {
            this.x += -3;
          }
        }
        if (this.keyPressed("a")) {
          this.x += -3;
          if (this.touching(this.sprites["Walls"].andClones())) {
            this.x += 3;
          }
        }
        if (this.keyPressed("s")) {
          this.y += -3;
          if (this.touching(this.sprites["Walls"].andClones())) {
            this.y += 3;
          }
        }
        if (this.keyPressed("w")) {
          this.y += 3;
          if (this.touching(this.sprites["Walls"].andClones())) {
            this.y += -3;
          }
        }
        this.stage.vars.Player1Coords = "" + (this.x + 500) + (this.y + 500);
        yield;
      }
    } else {
      while (true) {
        this.goto(
          "" +
            this.stage.vars.Player1Coords[1 - 1] +
            ("" +
              this.stage.vars.Player1Coords[2 - 1] +
              this.stage.vars.Player1Coords[3 - 1]) -
            500,
          "" +
            this.stage.vars.Player1Coords[4 - 1] +
            ("" +
              this.stage.vars.Player1Coords[5 - 1] +
              this.stage.vars.Player1Coords[6 - 1]) -
            500
        );
        yield;
      }
    }
  }

  *whenIReceiveJoin2() {
    while (true) {
      this.goto(-195, -132);
      yield;
    }
  }

  *whenGreenFlagClicked() {
    this.visible = false;
  }

  *whenIReceiveFull() {
    this.costume = "Full";
  }

  *whenIReceiveNotConnected() {
    this.costume = "Not connected";
  }

  *whenIReceiveJoined2() {
    if (
      this.stage.vars.playerId == 1 &&
      (this.stage.vars.Player2Check == this.stage.vars.localPlayer2Check ||
        this.stage.vars.playerId == 2) &&
      this.stage.vars.Player1Check == this.stage.vars.localPlayer1Check
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
