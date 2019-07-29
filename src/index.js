import "./styles.css";
import Player from "./player.js";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;

let player = new Player(SCREEN_WIDTH, SCREEN_HEIGHT);

function gameLoop() {
  ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  player.draw(ctx);
  player.update();
  requestAnimationFrame(gameLoop);
}

gameLoop();
