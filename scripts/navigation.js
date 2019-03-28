/* Declare global variables here */
var mousewheel = 0;
var demainMode = false;
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
          if (boundingRectDiv[i].getBoundingClientRect().x < leftDivWrapperWidth * 1.7 == true) {
            document.getElementById("left-up-title").innerHTML = contentsUp[i].titre;
            document.getElementById("left-up-text").innerHTML = contentsUp[i].content;
            document.getElementById("date-up-text").innerHTML = contentsUp[i].date;
            document.getElementsByClassName('timeline-dot-up')[i].style.backgroundColor = "#c4c4c4";
          }
          if (boundingRectDiv[i].getBoundingClientRect().x < leftDivWrapperWidth * 1.5 == true) {
            document.getElementById("left-bottom-title").innerHTML = contentsBottom[i].titre;
            document.getElementById("left-bottom-text").innerHTML = contentsBottom[i].content;
            document.getElementById("date-bottom-text").innerHTML = contentsBottom[i].date;
            document.getElementsByClassName('timeline-dot-bottom')[i].style.backgroundColor = "#11C6c6";
          }
        }
        if (demainMode == false && boundingRectDiv[7].getBoundingClientRect().x < leftDivWrapperWidth == true) {
          displayDemain();
          demainMode = true;
        }
        if (demainMode == true && boundingRectDiv[7].getBoundingClientRect().x > window.innerWidth - leftDivWrapperWidth == true) {
          displayHistoire();
          demainMode = false;
        }
    });
});

function displayDemain(){
  navWrapper.style.backgroundColor = "#000000";
  for (var i = 0; i < document.getElementsByClassName('text-nav').length; i++) {
    document.getElementsByClassName('text-nav')[i].style.color = "#ffffff";
  }
  wrapperDiv.style.backgroundColor = "#11C6c6";
  leftBottomDiv.style.backgroundColor = "#c4c4c4";
  leftUpDiv.style.backgroundColor = "#ffffff";
  document.getElementById('demain').style.display ="none";
  document.getElementById('histoire').style.display ="inline-block";
  document.getElementById('date-bottom-text').style.color = "#000000";
  document.getElementById('left-bottom-title').style.color = "#000000";
  document.getElementById('left-bottom-text').style.color = "#000000";
  timelineDiv.style.backgroundColor = '#000000';
  document.getElementById('nav-title').innerHTML = "Anticipation et réalité";
}

function displayHistoire(){
  navWrapper.style.backgroundColor = "#ffffff";
  for (var i = 0; i < document.getElementsByClassName('text-nav').length; i++) {
    document.getElementsByClassName('text-nav')[i].style.color = "#000000";
  }
  wrapperDiv.style.backgroundColor = "#000000";
  leftBottomDiv.style.backgroundColor = "#11C6c6";
  leftUpDiv.style.backgroundColor = "#c4c4c4";
  document.getElementById('demain').style.display ="inline-block";
  document.getElementById('histoire').style.display ="none";
  document.getElementById('date-bottom-text').style.color = "#ffffff";
  document.getElementById('left-bottom-title').style.color = "#ffffff";
  document.getElementById('left-bottom-text').style.color = "#ffffff";
  timelineDiv.style.backgroundColor = '#ffffff';
  document.getElementById('nav-title').innerHTML = "Histoire des supports publicitaires";
}
