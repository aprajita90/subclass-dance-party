var makeDancer = function(top, left, timeBetweenSteps) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.blink();
  this.$node = $('<span class="dancer"></span>');
  this.setPosition(top, left);
};

makeDancer.prototype.blink = function () {

  setTimeout (this.step.bind(this), this.timeBetweenSteps);
}; 

makeDancer.prototype.setPosition = function (top, left) {
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
};
