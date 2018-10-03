/* ---------------------------------------------
 common scripts
 --------------------------------------------- */

;
(function ($) {

    "use strict";

    var $window = $(window);


    /* ---------------------------------------------
     WOW init
     --------------------------------------------- */

    new WOW().init();

    $(document).ready(function () {

        /* ---------------------------------------------
         menu scrolling
         --------------------------------------------- */
        jQuery('.page-scroll').on('click', function (e) {
            var jump = $(this).attr('href');
            var new_position = $(jump).offset();
            $('html, body').stop().animate({
                scrollTop: new_position.top
            }, 500);
            e.preventDefault();
        });


        // add/remove active class in nav
        $(function () {
            $('.navbar-nav .nav-item').on('click', function () {
                $('.navbar-nav .nav-item.active').removeClass('active');
                $(this).addClass('active');
            });
        });

        // hide navbar while click nav link in responsive
        $(".navbar-nav li a").on('click', function (event) {
            $(".navbar-collapse").collapse('hide');
        });

        /*------------------------------------
            jQuery MeanMenu
        --------------------------------------*/
        $('.mobile-menu-active').meanmenu({
            meanScreenWidth: "991",
            meanMenuContainer: '.mobile-menu'
        });

        /* last  2 li child add class */
        $('ul.menu > li').slice(-2).addClass('last-elements');

        // Modal
        $(".freetour").modalVideo();

        



    });

    jQuery(window).on('load', function () {

        // Sticky Nav
        $(".sticky-nav").sticky({
            topSpacing: 0
        });

        // Preloader
        jQuery(".preloader").fadeOut('slow');

    });

})(jQuery);