$(document).ready(function() {
  window.dancers = [];
  window.carltonArray = [];


  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
  });

  $('.addNewButton').on('click', function(event) {
    var newDancerMakerFunctionName = $(this).data('new-dancer-maker-function-name');
    var newDancerMakerFunction = window[newDancerMakerFunctionName];
    var newDancer = new newDancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000 
      );
    window.carltonArray.push(newDancer);
    window.dancers.push(newDancer);
    $('body').append(newDancer.$node);
  });

  $('.addEdButton').on('click', function(event) {
    var edDanceFunctionName = $(this).data('add-dancer-maker-function-name');
    var newEdDanceFunction = window[edDanceFunctionName];
    var edDancer = new newEdDanceFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
      );
    $('body').append(edDancer.$node);
    window.dancers.push(edDancer);
  });

  $('.lineup').on('click', function(event) {
    var lineupFunctionName = $(this).data('make-dancer-maker-function-name');
    var newLineUpFunction = window[lineupFunctionName];
    newLineUpFunction();
  });

  $('.addNewButton').on('click', function(event) {
    for (var i = 0; i < dancers.length; i ++) {
      if (i % 2 === 0) {
        window.dancers[i].$node.addClass('switch');
      }
    }
  });
});
