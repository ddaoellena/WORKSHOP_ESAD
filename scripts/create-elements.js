/*
* Declare global variables here
*/
var wrapperDiv = document.getElementById('wrapper');
/* variables declaration ends */

function generateCircles(){
  for (var i = 0; i < texts.length; i++) {
    var newCircle = document.createElement("div");
    newCircle.classList.add("circle");
    wrapperDiv.appendChild(newCircle);
  }
}

generateCircles();
