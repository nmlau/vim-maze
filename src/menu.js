PhaserGame.Menu = function(game) {};
PhaserGame.Menu.prototype = {
  create: function() {
    this.mainmenu = this.add.sprite(PhaserGame._WIDTH*0.5, PhaserGame._HEIGHT*0.5, 'screen-mainmenu');
    this.mainmenu.anchor.set(0.5,0.5);
    
    this.player = this.add.sprite(PhaserGame._WIDTH*0.5, 40, 'player');
    this.player.width = 64;
    this.player.height = 64;
    this.player.anchor.set(0.5,0);
    
    this.target = this.add.sprite(PhaserGame._WIDTH*0.5, 40+64, 'target');
    this.target.width = 64;
    this.target.height = 64;
    this.target.anchor.set(0.5,0);

    this.startButton = this.add.button(PhaserGame._WIDTH*0.5, 40+64+64+20, 'button-start', this.startGame, this, 2, 0, 1);
    this.startButton.anchor.set(0.5,0);
    this.startButton.input.useHandCursor = true;
  },
  startGame: function() {
    this.game.state.start('Game');
  }
};