function Counter(game) {  
  this.game = game;  
  this.time = 0;
  this.totalTime = 0;
  this.fontstyle = { font: "24px Arial", fill: "#ffffff" };
}

Counter.prototype.create = function() {  
  // this.sprite = this.game.add.sprite(0, 0, 'hero')
  // this.game.timerText = this.game.add.text((32 * 20) - 150, 30, "Time: "+this.time, this.fontstyle);
  // this.game.totalTimeText = this.game.add.text((32 * 20) - 150, 60, "Total time: "+this.totalTime, this.fontstyle);
  this.game.timerText = this.game.add.text((32 * 20) - 450, 30, "Time: "+this.time, this.fontstyle);
  this.game.totalTimeText = this.game.add.text((32 * 20) - 450, 60, "Total time: "+this.totalTime, this.fontstyle);
;}

Counter.prototype.update = function() {  
  this.time++;
  this.game.timerText.setText("Time: "+this.time);
  this.game.totalTimeText.setText("Total time: "+(this.totalTime+this.time));
;}