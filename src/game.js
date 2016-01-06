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

        this.downKey;
        this.downKeyPressed = false;
        this.upKey;
        this.upKeyPressed = false;
        this.leftKey;
        this.leftKeyPressed = false;
        this.rightKey;
        this.rightKeyPressed = false;

        this.nextLevel = false;
        this.levelNum = 0;
        this.levels = ['Tile Layer 1', 'Tile Layer 2', 'Tile Layer 3'];

        this.fontstyle = { font: "24px Arial", fill: "#ffffff" };


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
            this.load.image('player', 'assets/cloud9.png');
            this.load.image('target', 'assets/car.png');
            
            //  Note: Graphics are Copyright 2015 Photon Storm Ltd.
        },

        create: function () {

            this.map = this.add.tilemap('map');
            this.map.addTilesetImage('tiles', 'tiles');

            this.layer = this.map.createLayer(this.levels[0]);
            // this.layer = this.map.createLayer('Tile Layer 1');

            this.map.setCollision(20, true, this.layer);

            this.car = this.add.sprite(48, 48, 'player');
            this.car.width = 32;
            this.car.height = 32;
            this.car.anchor.set(0.5);
            this.physics.arcade.enable(this.car);

            // this.target = this.add.sprite((this.gridsize * 20) - 48, (this.gridsize * 15) - 48, 'target');
            this.target = this.add.sprite(48, 48 * 5, 'target');
            this.target.width = 32;
            this.target.height = 32;
            this.target.anchor.set(0.5);
            this.physics.arcade.enable(this.target);

            this.timer = 0;
            this.totalTimer = 0;
            this.timerText = this.game.add.text((this.gridsize * 20) - 150, 30, "Time: "+this.timer, this.fontstyle);
            this.totalTimeText = this.game.add.text((this.gridsize * 20) - 150, 60, "Total time: "+this.totalTimer, this.fontstyle);
            this.time.events.loop(Phaser.Timer.SECOND, this.updateCounter, this);

            this.setKeys();
        },

        pressDownKey: function () {
            this.downKeyPressed = true;
        },

        pressUpKey: function () {
            this.upKeyPressed = true;
        },

        pressLeftKey: function () {
            this.leftKeyPressed = true;
        },

        pressRightKey: function () {
            this.rightKeyPressed = true;
        },

        finishLevel: function () {
            this.nextLevel = true;
            this.levelNum++;
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
            // if (this.downKeyPressed) {
            //     // debugger;
            //     x = this.car.x;
            //     y = this.car.y + 32;
            //     // this.map.getTileBelow(this.layer, x, y);
            //     tile = this.map.getTileWorldXY(x, y, 32, 32, this.layer)
            //     if (tile.index == 1) {
            //         this.car.y+=32;
            //     }
            //     this.downKeyPressed = false    
            // }
            x = this.car.x;
            y = this.car.y;
            if (this.downKeyPressed) {
                y+=32;
                this.downKeyPressed = false    
            }
            else if (this.upKeyPressed) {
                y-=32;
                this.upKeyPressed = false
            }
            else if (this.leftKeyPressed) {
                x-=32
                this.leftKeyPressed = false
            }
            else if (this.rightKeyPressed) {
                x+=32;
                this.rightKeyPressed = false
            }
            tile = this.map.getTileWorldXY(x, y, 32, 32, this.layer)
            if (tile.index == 1) {
                this.car.x = x;
                this.car.y = y;
            }
        },

        changeLevel: function () {
            if (this.nextLevel) {

                this.totalTimer += this.timer;
                this.timer = 0;
                if (this.levelNum > this.levels.length - 1) {
                    alert("Congratulations, your score is: " + this.totalTimer)
                }
                this.world.removeAll();
                this.layer = this.map.createLayer(this.levels[this.levelNum]);
                this.map.setCollision(20, true, this.layer);

                this.car = this.add.sprite(48, 48, 'player');
                this.car.width = 32;
                this.car.height = 32;
                this.car.anchor.set(0.5);
                this.physics.arcade.enable(this.car);

                // this.target = this.add.sprite((this.gridsize * 20) - 48, (this.gridsize * 15) - 48, 'target');
                this.target = this.add.sprite(48, 48 * 5, 'target');
                this.target.width = 32;
                this.target.height = 32;
                this.target.anchor.set(0.5);
                this.physics.arcade.enable(this.target);

                this.timerText = this.game.add.text((this.gridsize * 20) - 150, 30, "Time: "+this.timer, this.fontstyle);
                this.totalTimeText = this.game.add.text((this.gridsize * 20) - 150, 60, "Total time: "+this.totalTimer, this.fontstyle);

                this.nextLevel = false;
            }
        },
        updateCounter: function() {
            this.timer++;
            this.timerText.setText("Time: "+this.timer);
            this.totalTimeText.setText("Total time: "+(this.totalTimer+this.timer));
        },
        update: function () {
            // this.physics.arcade.collide(this.car, this.layer);
            this.physics.arcade.overlap(this.car, this.target, this.finishLevel, null, this)
            this.input.enabled = true;
            this.checkKeys();
            this.changeLevel();
        }
};