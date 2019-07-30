import "./styles.css";
import Game from "./game.js";
let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 600;

let game = new Game(SCREEN_WIDTH, SCREEN_HEIGHT);

function gameLoop() {
  ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
  game.draw(ctx);
  game.update();
  requestAnimationFrame(gameLoop);
}

gameLoop();
