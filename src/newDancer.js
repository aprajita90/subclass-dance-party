var newDancer = function(top, left) {
  makeNewDancer.call(this, top, left);
};
newDancer.prototype = Object.create(makeNewDancer.prototype);
newDancer.prototype.constructor = newDancer;

newDancer.prototype.step = function () {
  this.$node.toggle();
};