// PhaserGame.Game.prototype.render = function () {

//             //  Un-comment this to see the debug drawing

//             for (var t = 1; t < 5; t++)
//             {
//                 if (this.directions[t] === null)
//                 {
//                     continue;
//                 }

//                 var color = 'rgba(0,255,0,0.3)';

//                 if (this.directions[t].index !== this.safetile)
//                 {
//                     color = 'rgba(255,0,0,0.3)';
//                 }

//                 if (t === this.current)
//                 {
//                     color = 'rgba(255,255,255,0.3)';
//                 }

//                 this.game.debug.geom(new Phaser.Rectangle(this.directions[t].worldX, this.directions[t].worldY, 32, 32), color, true);
//             }

//             this.game.debug.geom(this.turnPoint, '#ffff00');
//         }