// This is a small program. There are only two sections. This first section is what runs
// as soon as the page loads.
$(document).ready(function () {
  render($("#display"), image);
  $("#apply").on("click", applyAndRender);
  $("#reset").on("click", resetAndRender);
});

/////////////////////////////////////////////////////////
//////// event handler functions are below here /////////
/////////////////////////////////////////////////////////

// this function resets the image to its original value; do not change this function
function resetAndRender() {
  reset();
  render($("#display"), image);
}

// this function applies the filters to the image and is where you should call
// all of your apply functions
function applyAndRender() { 
  // applyFilter(increaseGreenByBlue);
  // applyFilter(decreaseBlue);


  // Multiple TODOs: Call your apply function(s) here
  applyFilter(reddify) //TODO 6 applying new filters but they don't work
  

  // do not change the below line of code
  render($("#display"), image);
}

/////////////////////////////////////////////////////////
// "apply" and "filter" functions should go below here //
/////////////////////////////////////////////////////////

// TODO 1, 2 & 4: Create the applyFilter function here
function applyFilter(filterFunction){ 

  for(var i = 0; i< image.length;i++){
    var row = image[i]
  for(var e = 0; e< row.length;e++){
    var rgbString = row[e]; //accessing the values in the array
    var rgbNumbers = rgbStringToArray(rgbString);
    filterFunction(rgbNumbers);
    rgbString = rgbArrayToString(rgbNumbers) //assignning a new string to rgbString
    row[e] = rgbString; // re-assignning row[e]to a new value
   }
  }

}

// TODO 7: Create the applyFilterNoBackground function


// TODO 5: Create the keepInBounds function
function keepInBounds(number){
  var bigger = Math.max(number, 0)
  var solution = Math.min(bigger, 255)
}

// TODO 3: Create reddify function
//lolli/parameter is expected to be an array
function reddify(lolli){
  lolli[RED]= 200

}


// TODO 6: Create more filter functions
function decreaseBlue(array){
  array[BLUE] = keepInBounds(array[BLUE] - 50);
}

function increaseGreenByBlue(SecArray){
  SecArray[GREEN] = keepInBounds(SecArray[BLUE] + SecArray[GREEN])
}

// CHALLENGE code goes below here
