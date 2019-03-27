/* Declare global variables here */
var wrapperDiv = document.getElementById('wrapper');
var innerWrapperDiv = document.getElementById('inner-wrapper');
/* variables declaration ends */

function generateText(){
  for (var i = 0; i < texts.length; i++) {
    var newCircle = document.createElement("div");
    newCircle.classList.add("circle");
    newCircle.classList.add("inline-block");
    innerWrapperDiv.appendChild(newCircle);
  }
}

function generatePics(){
  for (var i = 0; i < pics.length; i++) {
    var newCircle = document.createElement("div");
    newCircle.classList.add("pic")
    newCircle.classList.add("inline-block");
    innerWrapperDiv.appendChild(newCircle);
  }
}

// generateText();
// generatePics();
