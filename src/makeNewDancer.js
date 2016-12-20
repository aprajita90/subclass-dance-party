var makeNewDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.blink();
  this.$node = $('<span class="newDancer"></span>');
  this.setPosition(top, left);
};

makeNewDancer.prototype.blink = function () {
  setTimeout (this.step.bind(this), this.timeBetweenSteps);
}; 

makeNewDancer.prototype.setPosition = function (top, left) {
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
};