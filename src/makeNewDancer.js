var makeNewDancer = function(top, left) {
  this.top = top;
  this.left = left;
  this.$node = $('<img src = "dance.gif" class = "newDancer" />');
  this.setPosition(top, left);
};

makeNewDancer.prototype.setPosition = function (top, left) {
  this.styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(this.styleSettings);
};