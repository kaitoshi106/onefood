$(document).ready(function () {
    // sticky navigation
    $('.js--section__features').waypoint(function (direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }

    }, {
        offset: '60px;'
    });
    /* Navigation scroll */
    $(function () {
        $('a[href*=#]:not([href=#])').click(function () {
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    });
    /* Scroll on buttons */
    $('.js--scroll-to-plans').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section__plans').offset().top
        }, 1000);
    });

    $('.js--scroll-to-start').click(function () {
        $('html, body').animate({
            scrollTop: $('.js--section__features').offset().top
        }, 1000);
    });
    /* Animations on scroll */
    $('.js--wp').waypoint(function (direction) {
        $('.js--wp').addClass('fade-in');
    }, {
        offset: '50%'
    });
    // Mobile Navigation
    $('.js--nav-icon').click(function () {
        var nav = $('.js--nav__menu');
        var icon = $('.js--nav-icon i');
        nav.slideToggle(200);
        if (icon.hasClass('fa-bars')) {
            icon.addClass('fa-times');
            icon.removeClass('fa-bars');
        } else {
            icon.addClass('fa-bars');
            icon.removeClass('fa-times');
        }
    });
    // ---------------

    // ---------
});