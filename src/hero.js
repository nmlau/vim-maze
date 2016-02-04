function Hero(game) {  
  this.game = game;  
  this.sprite = null;  
  this.any = 5;}

Hero.prototype.create = function() {  
  this.sprite = this.game.add.sprite(0, 0, 'hero')
;}

// Hero.prototype.update = function(enemieGroup) {  
//   this.sprite.collide(enemieGroup)
Hero.prototype.update = function(enemieGroup) {  
  alert("Hero update works")
;}