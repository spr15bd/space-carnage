export default class Input {
  constructor(player, game) {
    document.addEventListener("keydown", event => {
      let key = event.keyCode || event.key;

      switch (key) {
        case 37:
          if (!player.hit) player.left();
          break;
        case 39:
          if (!player.hit) player.right();
          break;
        case 17:
          if (!player.hit) game.shootBullet(player);
          break;
        case 32:
          game.start();
          break;
      }
    });

    document.addEventListener("keyup", event => {
      let key = event.keyCode || event.key;

      switch (key) {
        case 37:
          player.stop();
          break;
        case 39:
          player.stop();
          break;
      }
    });
  }
}
