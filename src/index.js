import "./styles.css";

let canvas = document.getElementById("gameScreen");
let ctx = canvas.getContext("2d");

const SCREEN_WIDTH = 1280;
const SCREEN_HEIGHT = 1024;

ctx.clearRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);
