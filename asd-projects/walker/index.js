/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  var KEY = {
    LEFT: 37,
    RIGHT: 39,
    UP: 38,
    DOWN: 40, 
  };
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('keydown', handleKeyDown);                           // change 'eventType' to the type of event you want to handle
  $(document).on('keyup', handleKeyUp);

  var xcoordinate = 0;
  var ycoordinate = 0;
  var speedx = 0;
  var speedy = 0;
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem();
    redrawGameItem();

  }
  
  /* 
  Called in response to events.
  */
  function handleKeyDown(event) {
    if(event.which === KEY.DOWN){
      console.log("down pressed")
      speedy = 5;
    }
    else if(event.which === KEY.UP){
      console.log("up pressed")
      speedy = -5;
    }
    else if(event.which === KEY.LEFT){
      console.log("left pressed")
      speedx = -5;
    }
    else if(event.which === KEY.RIGHT){
      console.log("right pressed")
      speedx = 5;
    }
 } 
 
 
    function handleKeyUp(event){
        if(event.which === KEY.DOWN){
          speedy = 0;
        }
        else if(event.which === KEY.UP){
          speedy = 0;
        }
        else if(event.which === KEY.LEFT){
          speedx = 0;
        }
        else if(event.which === KEY.RIGHT){
          speedx = 0;
        }
      }
 


  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function repositionGameItem(){
    xcoordinate += speedx;
    ycoordinate += speedy;
  }
  function redrawGameItem(){
    $("#walker").css("top", ycoordinate)
    $("#walker").css("left", xcoordinate)
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
