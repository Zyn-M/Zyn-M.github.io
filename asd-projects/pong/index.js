/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  const FRAME_RATE = 60;
  const FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  // Game Item Objects
  
  function Objects(id){
    var Ball = {};
    ball.x = parseFloat($("#ball").css("left"));
    ball.y = parseFloat($("#ball").css("top"));
    ball.width = $("#id").width(20);
    ball.height = $("#id").height(80);
    ball.speedX = 0;
    ball.speedY = 0;
    ball.id = "#ball";
    return Ball;
  }

  var theLeftPaddle = {};
  theLeftPaddle.x = parseFloat($("#theLeftPaddle").css("left"));
  theLeftPaddle.y = parseFloat($("#theRight paddle").css("top"));
  theLeftPaddle.width = $("#id").width(20);
  theLeftPaddle.height = $("#id").height(80);
  theLeftPaddle.speedX = 0;
  theLeftPaddle.soeedY = 0;
  theLeftPaddle.id = "#theLeftPaddle";
  

  var theRightPaddle = {};
  theRightPaddle.x = parseFloat($("#the right paddle").css("left"));
  theRightPaddle.y = parseFloat($("#the right paddle").css("top"));
  theRightPaddle.width = $("#id").width(20);
  theRightPaddle.height = $("#id").height(80);
  theRightPaddle.speedX = 0;
  theRightPaddle.speedY = 0;
  theRightPaddle.id = "#theRightPaddle"



  // one-time setup
  let interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)
  $(document).on('eventType', handleEvent);                           // change 'eventType' to the type of event you want to handle
  $(document).on("keydown", handleKeyDown); 
  $(document).on("keyup", handleKeyUp);
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  var KEY = {
     DOWN: 40,
     UP: 38,
  }

  function handleKeyDown(event){
    var event = event.DOWN;
    console.log(event.DOWN)

    if(event.which === KEY.DOWN){
      console.log("down pressed")

    }
    else{event.which === KEY.UP
    
    }
  }
  function handleKeyUp(event){
    var event = event.UP;
    console.log(event.up)

    if(event.which === event.UP){
      console.log("up pressed")

    }

  }

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    

  }
  
  /* 
  Called in response to events.
  */
  function handleEvent(event) {

  }

  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  function startBall(){
    
  }
  
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
