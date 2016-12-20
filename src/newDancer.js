var newDancer = function(top, left, timeBetweenSteps) {

  makeNewDancer.call(this, top, left, timeBetweenSteps);
};

newDancer.prototype = Object.create(makeNewDancer.prototype);
newDancer.prototype.constructor = newDancer;

newDancer.prototype.step = function () {
  this.blink();
  this.$node.toggle();
};