var makeEd = function(top, left) {
  this.top = top;
  this.left = left;
  this.$node = $('<span><img src = "ed.gif" class = "edDance"></span>');
  debugger;
  this.setPosition(top, left);
};
makeEd.prototype.setPosition = function (top, left) {
  this.styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(this.styleSettings);
};