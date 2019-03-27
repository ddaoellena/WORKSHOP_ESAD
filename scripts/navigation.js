/* Declare global variables here */
var mousewheel = 0;
var boundingRectDiv = document.getElementsByClassName("bounding-rect-div");
var leftDivWrapper = document.getElementById('left-div-wrapper');
var leftDivWrapperWidth = leftDivWrapper.getBoundingClientRect().width;
/* variables declaration ends */
/*
* Jquery function for mousewheel control
*/
$(function() {
    $("body").bind("mousewheel", function(event, delta) {
        if (delta < 0 && mousewheel >= -25) {
          mousewheel -= delta/2;
          // console.log(mousewheel);
        }
        if (delta > 0 && mousewheel > 0) {
          mousewheel -= delta/2;
          // console.log(mousewheel);
        }
        for (var i = 0; i < boundingRectDiv.length; i++) {
          if (boundingRectDiv[i].getBoundingClientRect().x < leftDivWrapperWidth * 1.5 == true) {
            document.getElementById("left-up-title").innerHTML = contentsUp[i].titre;
            document.getElementById("left-up-text").innerHTML = contentsUp[i].content;
            document.getElementById("date-up-text").innerHTML = contentsUp[i].date;
            document.getElementsByClassName('timeline-dot-up')[i].style.backgroundColor = "#c4c4c4";
          }
          if (boundingRectDiv[i].getBoundingClientRect().x < leftDivWrapperWidth * 1.3 == true) {
            document.getElementById("left-bottom-title").innerHTML = contentsBottom[i].titre;
            document.getElementById("left-bottom-text").innerHTML = contentsBottom[i].content;
            document.getElementById("date-bottom-text").innerHTML = contentsBottom[i].date;
            document.getElementsByClassName('timeline-dot-bottom')[i].style.backgroundColor = "#11C6c6"
          }
        }
    });
});
