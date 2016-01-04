var PhaserGame = {
        _WIDTH: 320,
        _HEIGHT: 480
};

PhaserGame.Game = function(game) {
        this.map = null;
        this.layer = null;
        this.car = null;

        this.safetile = 1;
        this.gridsize = 32;

        // this.speed = 150;
        this.speed = 32;

        var downKey;
        var downKeyPressed = false;
        var upKey;
        var upKeyPressed = false;
        var leftKey;
        var leftKeyPressed = false;
        var rightKey;
        var rightKeyPressed = false;

};
PhaserGame.Game.prototype = {

        init: function () {

            // this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.scale.pageAlignHorizontally = true;
            this.scale.pageAlignVertically = true;

            Phaser.Canvas.setImageRenderingCrisp(this.game.canvas);
            
            this.physics.startSystem(Phaser.Physics.ARCADE);
        },

        preload: function () {

            //  We need this because the assets are on Amazon S3
            //  Remove the next 2 lines if running locally
            // this.load.baseURL = 'http://files.phaser.io.s3.amazonaws.com/codingtips/issue005/';
            // this.load.crossOrigin = 'anonymous';

            this.load.tilemap('map', 'assets/maze.json', null, Phaser.Tilemap.TILED_JSON);
            this.load.image('tiles', 'assets/tiles.png');
            this.load.image('car', 'assets/cloud9.png');
            
            //  Note: Graphics are Copyright 2015 Photon Storm Ltd.
        },

        create: function () {

            this.map = this.add.tilemap('map');
            this.map.addTilesetImage('tiles', 'tiles');

            this.layer = this.map.createLayer('Tile Layer 2');

            this.map.setCollision(20, true, this.layer);

            this.car = this.add.sprite(48, 48, 'car');
            this.car.width = 32;
            this.car.height = 32;
            this.car.anchor.set(0.5);

            this.physics.arcade.enable(this.car);

            this.setKeys();
        },

        pressDownKey: function () {
            this.downKeyPressed = true
        },

        pressUpKey: function () {
            this.upKeyPressed = true
        },

        pressLeftKey: function () {
            this.leftKeyPressed = true
        },

        pressRightKey: function () {
            this.rightKeyPressed = true
        },

        setKeys: function() {
            downKey = this.input.keyboard.addKey(Phaser.Keyboard.DOWN);
            downKey.onDown.add(this.pressDownKey, this);

            upKey = this.input.keyboard.addKey(Phaser.Keyboard.UP);
            upKey.onDown.add(this.pressUpKey, this);

            leftKey = this.input.keyboard.addKey(Phaser.Keyboard.LEFT);
            leftKey.onDown.add(this.pressLeftKey, this);

            rightKey = this.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
            rightKey.onDown.add(this.pressRightKey, this);
            
            // this.input.keyboard.removeKeyCapture(Phaser.Keyboard.DOWN);
            // this.input.keyboard.removeKeyCapture(Phaser.Keyboard.UP);
            // this.input.keyboard.removeKeyCapture(Phaser.Keyboard.LEFT);
            // this.input.keyboard.removeKeyCapture(Phaser.Keyboard.RIGHT);
        },

        checkKeys: function () {
            if (this.downKeyPressed) {
                this.car.y+=32;
                this.downKeyPressed = false
            }
            else if (this.upKeyPressed) {
                this.car.y-=32;
                this.upKeyPressed = false
            }
            else if (this.leftKeyPressed) {
                this.car.x-=32;
                this.leftKeyPressed = false
            }
            else if (this.rightKeyPressed) {
                this.car.x+=32;
                this.rightKeyPressed = false
            }
        },

        update: function () {
            this.physics.arcade.collide(this.car, this.layer);
            this.input.enabled = true;
            this.checkKeys();
        }
};