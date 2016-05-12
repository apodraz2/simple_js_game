// Enemies our player must avoid
var Enemy = function(x, y, speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;
    this.speed = speed;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.

    if(this.x === 0 || this.x >= 450) {
      this.x = 0.5;

    }
    if((this.x <= player.x + 50 && this.x >= player.x - 50) && (this.y <= player.y + 50 && this.y >= player.y - 50)) {

      player.x = 300;
      player.y = 425;
    }

    var mov = this.speed*dt;
    this.x += mov;
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(sprite, x, y) {
  this.sprite = sprite;
  this.x = x;
  this.y = y;
}

Player.prototype.handleInput = function(keyCode) {
  switch(keyCode) {
    case 'left':
      this.x -= 50;
      break;
    case 'right':
      this.x += 50;
      break;

    case 'up':
      this.y -= 50;
      break;

    case 'down':
      this.y += 50;
      break;


  }

}

Player.prototype.update = function(dt) {
  if(this.x <= 0 || this.x >= 450 || this.y <= 0 || this.y >= 450) {
    this.x = 300;
    this.y = 425;
  }



}

Player.prototype.render = Enemy.prototype.render;


// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var enemy1 = new Enemy(50, 200, 50);
var enemy3 = new Enemy(175, 100, 100);
var enemy2 = new Enemy(100, 0, 75);

var allEnemies = [enemy1, enemy2, enemy3];
var player = new Player('images/char-boy.png', 300, 425);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
