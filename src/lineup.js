var lineup = function() {
  var windowHeight = 500;
  for (var i = 0; i < window.dancers.length; i++) {
    window.dancers[i].$node.css({ top: windowHeight});
  }
};