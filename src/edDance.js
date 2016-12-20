var edDancer = function(top, left) {
  makeEd.call(this, top, left);
};

edDancer.prototype = Object.create(makeEd.prototype);
edDancer.prototype.constructor = edDancer;

edDancer.prototype.step = function () {
  //this.blink();
  this.$node.toggle();
};