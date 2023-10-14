jQuery(function ($) {
    'use strict';
    // drop down header function
     $(window).on('scroll', function () {
        if ($(this).scrollTop() > 70) { 
            $('.navbar-area').addClass("is-sticky"); 
        }
        else { 
            $('.navbar-area').removeClass("is-sticky"); 
        }
    });

    $(window).on('load', function () {
        if ($(".wow").length) {
            var wow = new WOW({ boxClass: 'wow', animateClass: 'animated', offset: 20, mobile: true, live: true, });
            wow.init();
        }
    }); 
    $(window).on('load', function () { 
        $('.preloader-area').fadeOut(); 
    });
}(jQuery));