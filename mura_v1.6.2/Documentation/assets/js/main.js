jQuery(document).ready(function($){

  "use strict";

 /*---------------------------------------*/
/* smooth scroll anchor links            */
/*---------------------------------------*/
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 500);
});

});