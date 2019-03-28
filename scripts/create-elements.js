/* Declare global variables here */
var wrapperDiv = document.getElementById('wrapper');
var innerWrapperDiv = document.getElementById('inner-wrapper');
var timelineDiv = document.getElementById('timeline');
var leftUpText = document.getElementById('left-up-text');
var leftBottomText = document.getElementById('left-bottom-text');
var navWrapper = document.getElementById('nav-wrapper');
var navTitle = document.getElementById('nav-title');
var leftUpDiv = document.getElementById('left-div-up');
var leftBottomDiv = document.getElementById('left-div-bottom');
/* variables declaration ends */

function generateDots(){
  for (var i = 0; i < contentsUp.length; i++) {
    var boundingRectDiv = document.createElement("div");
    boundingRectDiv.classList.add("bounding-rect-div");
    boundingRectDiv.id = "bounding-rect-div-" + i ;

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

    boundingRectDiv.appendChild(dotWrapperDivUp);
    dotWrapperDivUp.appendChild(dotDivUp);

    boundingRectDiv.appendChild(dotWrapperDivBottom);
    dotWrapperDivBottom.appendChild(dotDivBottom);

    timelineDiv.appendChild(boundingRectDiv);
  }
}

function addPic(){
  var timelineWrapperUp = document.getElementsByClassName('timeline-dot-wrapper-up');
  for (var i = 0; i < contentsUp.length; i++) {
    var imgUp = document.createElement("img");
    imgUp.classList.add("img-timeline");
    imgUp.classList.add("img-timeline-up");
    imgUp.src = "./assets/pics/" + contentsUp[i].pic;
    timelineWrapperUp[i].appendChild(imgUp);
  }

  var timelineWrapperBottom = document.getElementsByClassName('timeline-dot-wrapper-bottom');
  for (var i = 0; i < contentsBottom.length; i++) {
    var imgBottom = document.createElement("img");
    imgBottom.classList.add("img-timeline");
    imgBottom.classList.add("img-timeline-bottom");
    imgBottom.src = "./assets/pics/" + contentsBottom[i].pic;
    timelineWrapperBottom[i].appendChild(imgBottom);
  }
}

function addInitText(){
  document.getElementById("left-up-title").innerHTML = contentsUp[0].titre;
  document.getElementById("left-up-text").innerHTML = contentsUp[0].content;
  document.getElementById("date-up-text").innerHTML = contentsUp[0].date;
  document.getElementById("left-bottom-title").innerHTML = contentsBottom[0].titre;
  document.getElementById("left-bottom-text").innerHTML = contentsBottom[0].content;
  document.getElementById("date-bottom-text").innerHTML = contentsBottom[0].date;
  document.getElementsByClassName('timeline-dot-up')[0].style.backgroundColor = "#c4c4c4";
  document.getElementsByClassName('timeline-dot-bottom')[0].style.backgroundColor = "#11C6c6"
}

function initNav(){
  var marginLeft = document.getElementById('left-up-text-div').getBoundingClientRect().x;
  var lineHeight = document.getElementById('nav-wrapper').getBoundingClientRect().height;
  document.getElementById('nav-title').style.marginLeft = marginLeft + "px";
  document.getElementById('nav-title').style.lineHeight = lineHeight + "px";
  document.getElementById('nav-dates').style.lineHeight = lineHeight + "px";
}

function addAnchorDiv(){
  for (var i = 0; i < contentsUp.length; i++) {
    var dotUp = document.getElementsByClassName('timeline-dot-up');
    var leftDivWidth = document.getElementById('left-div-wrapper').getBoundingClientRect().width;
    if (typeof contentsUp[i].id !== 'undefined') {
      var anchorDiv = document.createElement("div");
      anchorDiv.classList.add("anchor-div");
      anchorDiv.id = contentsUp[i].id;
      anchorDiv.style.top = dotUp[i].getBoundingClientRect().x + "px";
      anchorDiv.style.left = dotUp[i].getBoundingClientRect().x - leftDivWidth +"px";
      innerWrapperDiv.appendChild(anchorDiv);
    }
  }
}

function setTextOnAnchor(){
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
      document.getElementsByClassName('timeline-dot-bottom')[i].style.backgroundColor = "#11C6c6"
    }
  }
}

function initFunctions(){
  generateDots();
  addPic();
  addInitText();
  initNav();
  addAnchorDiv();
}

initFunctions();
