PhaserGame.Game = function(game) {
        this.map = null;
        this.layer = null;
        this.car = null;

        this.counter = new Counter(game);

        this.safetile = 1;
        this.gridsize = 32;

        this.downKey;
        this.upKey;
        this.leftKey;
        this.rightKey;

        this.nextLevel = false;
        this.levelNum = 0;
        this.levels = ['Tile Layer 1', 'Tile Layer 2', 'Tile Layer 3'];

        this.fontstyle = { font: "24px Arial", fill: "#ffffff" };
};

PhaserGame.Game.prototype = {

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

            this.target = this.add.sprite((this.gridsize * 20) - 48, (this.gridsize * 15) - 48, 'target');
            // this.target = this.add.sprite(48, 48 * 5, 'target');
            this.target.width = 32;
            this.target.height = 32;
            this.target.anchor.set(0.5);
            this.physics.arcade.enable(this.target);

            this.counter.create();
            this.time.events.loop(Phaser.Timer.SECOND, this.counter.update, this.counter);

            this.createKeys();

        },

        validateMovement: function(x,y) {
            tile = this.map.getTileWorldXY(x, y, 32, 32, this.layer)
            if (tile.index == 1) {
                this.car.x = x;
                this.car.y = y;
            }
        },

        pressDownKey: function () {
            x = this.car.x;
            y = this.car.y + 32;
            this.validateMovement(x,y)
        },

        pressUpKey: function () {
            x = this.car.x;
            y = this.car.y - 32;
            this.validateMovement(x,y)
        },

        pressLeftKey: function () {
            x = this.car.x-32;
            y = this.car.y;
            this.validateMovement(x,y)
        },

        pressRightKey: function () {
            x = this.car.x+32;
            y = this.car.y;
            this.validateMovement(x,y)
        },

        finishLevel: function () {
            this.nextLevel = true;
            this.levelNum++;
        },

        createKeys: function() {
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

        changeLevel: function () {
            if (this.nextLevel) {

                this.counter.totalTime += this.counter.time;
                this.counter.time = 0;

                if (this.levelNum > this.levels.length - 1) {
                    alert("Congratulations, your score is: " + this.counter.totalTime);
                    this.levelNum = 0;
                    this.counter.reset();
                }
                this.resetWorld();
            }
        },
        resetWorld: function() {
            this.world.removeAll();
            this.layer = this.map.createLayer(this.levels[this.levelNum]);
            this.map.setCollision(20, true, this.layer);

            this.car = this.add.sprite(48, 48, 'player');
            this.car.width = 32;
            this.car.height = 32;
            this.car.anchor.set(0.5);
            this.physics.arcade.enable(this.car);

            this.target = this.add.sprite((this.gridsize * 20) - 48, (this.gridsize * 15) - 48, 'target');
            // this.target = this.add.sprite(48, 48 * 5, 'target');
            this.target.width = 32;
            this.target.height = 32;
            this.target.anchor.set(0.5);
            this.physics.arcade.enable(this.target);

            this.counter.create();

            this.nextLevel = false;
        },
        update: function () {
            // this.physics.arcade.collide(this.car, this.layer);
            this.physics.arcade.overlap(this.car, this.target, this.finishLevel, null, this)
            this.input.enabled = true;
            this.changeLevel();
        }
};

