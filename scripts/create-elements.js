/* Declare global variables here */
var wrapperDiv = document.getElementById('wrapper');
var innerWrapperDiv = document.getElementById('inner-wrapper');
var timelineDiv = document.getElementById('timeline');
var leftUpText = document.getElementById('left-up-text');
var leftBottomText = document.getElementById('left-bottom-text');
/* variables declaration ends */

function generateDots(){
  for (var i = 0; i < contentsUp.length; i++) {
    var dotWrapperDivUp = document.createElement("div");
    dotWrapperDivUp.classList.add("timeline-dot-wrapper");
    dotWrapperDivUp.classList.add("timeline-dot-wrapper-up");

    var dotWrapperDivBottom = document.createElement("div");
    dotWrapperDivBottom.classList.add("timeline-dot-wrapper");
    dotWrapperDivBottom.classList.add("timeline-dot-wrapper-bottom");

    var dotDivUp = document.createElement("div");
    dotDivUp.classList.add("timeline-dot");
    dotDivUp.classList.add("timeline-dot-up");

    var dotDivBottom = document.createElement("div");
    dotDivBottom.classList.add("timeline-dot");
    dotDivBottom.classList.add("timeline-dot-bottom");

    timelineDiv.appendChild(dotWrapperDivUp);
    dotWrapperDivUp.appendChild(dotDivUp);

    timelineDiv.appendChild(dotWrapperDivBottom);
    dotWrapperDivBottom.appendChild(dotDivBottom);
  }
}

function addContent(){

}

function init(){
  generateDots();
}
