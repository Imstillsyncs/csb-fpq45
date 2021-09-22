/* eslint-disable require-yield, eqeqeq */

import {
  Stage as StageBase,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume(
        "instruction page 1",
        "./Stage/costumes/instruction page 1.svg",
        { x: 294.6751152073734, y: 193.49393939393929 }
      ),
      new Costume(
        "Instruction page 2",
        "./Stage/costumes/Instruction page 2.png",
        { x: 480, y: 360 }
      ),
      new Costume("Credits page", "./Stage/costumes/Credits page.svg", {
        x: 240,
        y: 178.5
      }),
      new Costume("Game", "./Stage/costumes/Game.png", { x: 480, y: 360 }),
      new Costume("Menu", "./Stage/costumes/Menu.svg", {
        x: 242.00000564640067,
        y: 188.66660028986658
      })
    ];

    this.sounds = [
      new Sound("Tada", "./Stage/sounds/Tada.wav"),
      new Sound(
        "Best Friend (8 Bits) - Lofi Hip Hop (8 Bits Music) [HD] 1080p",
        "./Stage/sounds/Best Friend (8 Bits) - Lofi Hip Hop (8 Bits Music) [HD] 1080p.mp3"
      ),
      new Sound(
        "Azhdaha Battle Theme [All Phases] - Genshin Impact OST2",
        "./Stage/sounds/Azhdaha Battle Theme [All Phases] - Genshin Impact OST2.wav"
      )
    ];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked2)
    ];

    this.vars.Player1Check = 0;
    this.vars.Player2Check = 430;
    this.vars.player1 = 29;
    this.vars.player2 = 0;
    this.vars.playerId = 1;
    this.vars.score = 0;
    this.vars.CloudCheck = 0;
    this.vars.Player1Coords = 272366;
    this.vars.Player2Coords = 0;
    this.vars.localPlayer1Check = 0;
    this.vars.localPlayer2Check = 430;
    this.vars.letter = 0;
    this.vars.letterDetect = 0;
    this.vars.listItem = 0;
    this.vars.i = 0;
    this.vars.Leaderboard = 0;
    this.vars.v1 = 0;
    this.vars.item = 0;
    this.vars.char = 0;
    this.vars.hp = 0;
    this.vars.hpmax = 100;
    this.vars.playerHealth = 0;
    this.vars.playerLives = 0;
    this.vars.usernames = [];
    this.vars.letters = [];
    this.vars.users = [];
    this.vars.scores = [];
  }

  *whenGreenFlagClicked() {
    this.costume = "Menu";
  }

  *whenGreenFlagClicked2() {}

  *whenbackdropswitchesto() {
    this.broadcast("Start");
    yield* this.wait(2);
    this.vars.CloudCheck = 0;
    this.vars.CloudCheck = 1;
    if (this.vars.CloudCheck == 1) {
      this.vars.localPlayer1Check = this.vars.Player1Check;
      this.vars.localPlayer2Check = this.vars.Player2Check;
      yield* this.wait(5);
      if (this.vars.localPlayer1Check == this.vars.Player1Check) {
        this.vars.playerId = 1;
        this.vars.Player1Check = 0;
        this.vars.Player1Coords = 500500;
      } else {
        if (this.vars.localPlayer2Check == this.vars.Player2Check) {
          this.vars.playerId = 2;
          this.vars.Player2Check = 0;
          this.vars.Player2Coords = 500500;
          this.broadcast("joined");
        } else {
          this.broadcast("full");
        }
      }
    } else {
      this.broadcast("not connected");
    }
    this.vars.CloudCheck = 0;
  }
}
