/* Declare global variables here */
var mousewheel = 0;
/* variables declaration ends */

/*
* Jquery function for mousewheel control
*/
$(function() {
    $("body").bind("mousewheel", function(event, delta) {
        if (delta < 0 && mousewheel >= -25) {
          mousewheel -= delta/2;
          console.log(mousewheel);
        }
        if (delta > 0 && mousewheel > 0) {
          mousewheel -= delta/2;
          console.log(mousewheel);
        }
    });
});
