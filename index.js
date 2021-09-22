import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Player1 from "./Player1/Player1.js";
import Player2 from "./Player2/Player2.js";
import Bullet from "./Bullet/Bullet.js";
import Walls from "./Walls/Walls.js";
import PlayButton from "./PlayButton/PlayButton.js";
import InstructionsButton from "./InstructionsButton/InstructionsButton.js";
import CreditsButton from "./CreditsButton/CreditsButton.js";
import NextPageButton from "./NextPageButton/NextPageButton.js";
import BackToMenu from "./BackToMenu/BackToMenu.js";
import BackToMenu2 from "./BackToMenu2/BackToMenu2.js";
import BackToMenu3 from "./BackToMenu3/BackToMenu3.js";
import HealthBar from "./HealthBar/HealthBar.js";

const stage = new Stage({ costumeNumber: 4 });

const sprites = {
  Player1: new Player1({
    x: -206,
    y: -137,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Player2: new Player2({
    x: -206,
    y: -137,
    direction: 90,
    costumeNumber: 2,
    size: 100,
    visible: true
  }),
  Bullet: new Bullet({
    x: -35,
    y: -4,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  Walls: new Walls({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  PlayButton: new PlayButton({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  InstructionsButton: new InstructionsButton({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  CreditsButton: new CreditsButton({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  NextPageButton: new NextPageButton({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  BackToMenu: new BackToMenu({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  BackToMenu2: new BackToMenu2({
    x: 48.3320290897661,
    y: 6.555422926799192,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: false
  }),
  BackToMenu3: new BackToMenu3({
    x: -59.86468172947159,
    y: -3.573659753474512,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  HealthBar: new HealthBar({
    x: -193,
    y: -170,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
