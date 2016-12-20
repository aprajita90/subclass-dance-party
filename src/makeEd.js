var makeEd = function(top, left) {
  this.top = top;
  this.left = left;
  this.$node = $('<span class="newDancer"><img src = "ed.gif"></span>');
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