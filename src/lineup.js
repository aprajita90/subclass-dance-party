var lineup = function() {
  var windowHeight = 500;
  //loop thorugh all elements in window.dancers
  //$(".newDancer").remove();
 // $(".dancer").remove();
 // $(".edDance").remove();
  for (var i = 0; i < window.dancers.length; i++) {
   // window.dancers[i].top = windowHeight;
    console.log(window.dancers[i].$node, 'before');
    window.dancers[i].$node.css({ top: windowHeight});
    console.log(window.dancers[i].$node, 'after');

    //window.dancers[i].styleSettings.top = windowHeight;
    //$('body').append(window.dancers[i].$node);
  }
  //reset each top value to the same thing
};