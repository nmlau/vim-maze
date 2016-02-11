var PhaserGame = {
  _WIDTH: 640,
  _HEIGHT: 480
};

PhaserGame.Boot = function(game) {};
PhaserGame.Boot.prototype = {
  init: function () {
      Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);  
      this.physics.startSystem(Phaser.Physics.ARCADE);
  },
  preload: function() {
    this.load.tilemap('map', 'assets/maze.json', null, Phaser.Tilemap.TILED_JSON);
    this.load.image('tiles', 'assets/tiles.png');
    this.load.image('player', 'assets/cloud9.png');
    this.load.image('target', 'assets/treasure.png');

    this.load.spritesheet('button-start', 'assets/button-start.png', 146, 51);
    this.load.image('screen-mainmenu', 'assets/screen-mainmenu.png');
    //  Note: Graphics are Copyright 2015 Photon Storm Ltd.
  },
  create: function() {
    // this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;
    this.game.state.start('Menu');
  }
};