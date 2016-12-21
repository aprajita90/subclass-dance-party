var makeEd = function(top, left) {
  this.top = top;
  this.left = left;
  this.$node = $('<img src = "ed.gif" class = "edDance" />');
  this.setPosition(top, left);
};
makeEd.prototype.setPosition = function (top, left) {
  this.styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(this.styleSettings);
};