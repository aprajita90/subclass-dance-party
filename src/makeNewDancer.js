var makeNewDancer = function(top, left) {
  this.top = top;
  this.left = left;
  this.$node = $('<span class="newDancer"><img src = "dance.gif"></span>');
  this.setPosition();
};

makeNewDancer.prototype.setPosition = function () {
  this.styleSettings = {
  };
  this.$node.css(this.styleSettings);
};