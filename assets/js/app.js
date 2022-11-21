$(document).ready(function () {

    'use strict';

    // ---------------------
    // :: Navbar Link On Hover
    // ---------------------

    var linkArray = $(".js-dropdown-links .dropdown-link")
    if (linkArray.length >= 1) {
        linkArray.each(function (i) {
            $(linkArray[i]).hover(function () {
                var linkPosition = $(linkArray[i]).position();
                var linkHeight = $(linkArray[i]).outerHeight();
                var hoverState = $('.js-hover-state');

                hoverState.css({
                    'opacity': 1,
                    'top': linkPosition.top + 'px',
                    'height': linkHeight + 'px'
                })
            })

            $(linkArray[i]).mouseleave(function () {
                var hoverState = $('.js-hover-state');

                hoverState.css({
                    'opacity': 0,
                    'top': 0
                })
            })
        })
    }

    $('.dropdown-toggle').on('mouseover mouseleave', function () {
        $('.dropdown-menu').toggleClass('in');

        if ($('.dropdown-menu').hasClass('in')) {
            $(this).parent().addClass('dropdown-in')
        } else {
            $(this).parent().removeClass('dropdown-in')
        }
    });

    $('.dropdown-menu').on('mouseenter mouseleave', function () {
        $('.dropdown-menu').toggleClass('in');

        if ($('.dropdown-menu').hasClass('in')) {
            $(this).parent().addClass('dropdown-in')
        } else {
            $(this).parent().removeClass('dropdown-in')
        }
    });

    // ---------------------
    // :: Add Class On Window Scroll
    // ---------------------

    $(window).on('scroll', function () {
        if ($(".navbar").offset().top > 50) {
            $(".navbar").addClass("nav-scroll");
        } else {
            $(".navbar").removeClass("nav-scroll");
        }
    });


    // ---------------------
    // :: Smoothscroll Link
    // ---------------------

    $('#home a').on('click', function (event) {
        $('.navbar-collapse').removeClass('show');
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 50);
        event.preventDefault();
    });

    /* ========================================================================= */
    /*  Change Photo On Mobile Services
    /* ========================================================================= */

    $('.phone-slide').owlCarousel({
        loop: true,
        margin: 0,
        dots: false,
        nav: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* Change Button */

    var b = $(".phone-slide"),
        k = $(".nav-catch li");
    b.on('changed.owl.carousel', function (event) {
        var n = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var o = event.item.count;
        if (n > o || n == 0) {
            n = o - (n % o);
        }

        (n > o || 0 == n) && (n = o - n % o), n--;
        var t = $(".nav-catch li:nth(" + n + ")");
        a(t)

    }), k.on("click", function () {
        var e = $(this).data("owl-item");
        b.trigger("to.owl.carousel", e), a($(this));
    });

    function a(e) {
        k.removeClass("active-icon");
        e.addClass("active-icon");
    }

    /* Change Text */
    var b = $(".phone-slide"),
        i = $(".mobile-pane");
    b.on('changed.owl.carousel', function (event) {
        var h = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var v = event.item.count;
        if (h > v || h == 0) {
            h = v - (h % v);
        }

        (h > v || 0 == h) && (h = v - h % v), h--;
        var w = $(".mobile-pane:nth(" + h + ")");
        c(w)

    }), $(".nav-catch li").on("click", function () {
        return false;
        var y = $(this).data("owl-item");
        b.trigger("to.owl.carousel", y), c($(".mobile-pane"));
    });

    function c(y) {
        i.removeClass("active");
        y.addClass("active");
    }

    // ---------------------
    // :: Statistics Counter
    // ---------------------

    $('.counter-value').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }, {
            accX: 0,
            accY: 0
        });
    });

    $('.followers-number').each(function () {
        $(this).appear(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 2000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        }, {
            accX: 0,
            accY: 0
        });
    });

    // ---------------------
    // :: Testimonials
    // ---------------------

    if ($(".persons-box").length) {
        var closeCon = $(".persons-box");
        var iconsPlace = closeCon.children();
        iconsPlace.each(function () {
            var iconOne = $(this);
            var iconSize = iconOne.attr("iconSize");
            iconOne.css({
                'width': 10 * iconSize + "px",
                'height': 10 * iconSize + "px",
            });
        });
    }

    // ---------------------
    // :: Change Text in Testimonials
    // ---------------------
    $('.testimonial-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        mouseDrag: false,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    /* Change Button */

    var s = $(".testimonial-slider"),
        q = $(".callimg");
    s.on('changed.owl.carousel', function (event) {
        var m = (event.item.index + 1) - event.relatedTarget._clones.length / 2;
        var p = event.item.count;
        if (m > p || m == 0) {
            m = p - (m % p);
        }

        (m > p || 0 == m) && (m = p - m % p), m--;
        var w = $(".callimg:nth(" + m + ")");
        x(w)

    }), q.on("click", function () {
        var f = $(this).data("owl-item");
        s.trigger("to.owl.carousel", f), x($(this));
    });

    function x(f) {
        q.removeClass("active-person");
        f.addClass("active-person");
    }

    // ---------------------
    // :: Screenshots
    // ---------------------
    var swiper = new Swiper('.swiper-screenshots', {
        loop: true,
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        autoplay: true,
        slidesPerView: 'auto',
        spaceBetween: 70,
        disableOnInteraction: false,
        coverflowEffect: {
            rotate: 20,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
        }
    });

    // ---------------------
    // :: Header Phone Slider
    // ---------------------
    $('.header-phone-slider').owlCarousel({
        loop: true,
        margin: 0,
        autoplay: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            400: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    // ---------------------
    // :: Header Parallax
    // ---------------------

    var $layerParallax = $('.layer-parallax');
    if (!Modernizr.touch) {
        if ($layerParallax.length > 0) {
            $layerParallax.parallax();
        }
    }

    // ---------------------
    // :: Back To Top Button
    // ---------------------

    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 800) {
            $("#scroll-top").addClass("show");
        } else {
            $("#scroll-top").removeClass("show");
        }
    });
    $("#scroll-top").on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 50);
    });

    // ---------------------
    // :: Contact Form
    // ---------------------

    $('#contact-submit').on("click", function (e) {

        //stop the form from being submitted
        e.preventDefault();

        /* declare the variables, var error is the variable that we use on the end
        to determine if there was an error or not */
        var error = false;
        var name = $('#name').val();
        var email = $('#email').val();
        var subject = $('#subject').val();
        var message = $('#message').val();

        /* in the next section we do the checking by using VARIABLE.length
        where VARIABLE is the variable we are checking (like name, email),
        length is a JavaScript function to get the number of characters.
        And as you can see if the num of characters is 0 we set the error
        variable to true and show the name_error div with the fadeIn effect. 
        if it's not 0 then we fadeOut the div( that's if the div is shown and
        the error is fixed it fadesOut. 

        The only difference from these checks is the email checking, we have
        email.indexOf('@') which checks if there is @ in the email input field.
        This JavaScript function will return -1 if no occurrence have been found.*/
        if (name.length == 0) {
            var error = true;
            $('#name').css("background", "rgba(216, 0, 12, .9)");
        } else {
            $('#name').css("background", "rgba(255, 255, 255, .1)");
        }
        if (email.length == 0 || email.indexOf('@') == '-1') {
            var error = true;
            $('#email').css("background", "rgba(216, 0, 12, .9)");
        } else {
            $('#email').css("background", "rgba(255, 255, 255, .1)");
        }
        if (subject.length == 0) {
            var error = true;
            $('#subject').css("background", "rgba(216, 0, 12, .9)");
        } else {
            $('#subject').css("background", "rgba(255, 255, 255, .1)");
        }
        if (message.length == 0) {
            var error = true;
            $('#message').css("background", "rgba(216, 0, 12, .9)");
        } else {
            $('#message').css("background", "rgba(255, 255, 255, .1)");
        }

        //now when the validation is done we check if the error variable is false (no errors)
        if (error == false) {
            //disable the submit button to avoid spamming
            //and change the button text to Sending...
            $('#contact-submit').attr({
                'disabled': 'false',
                'value': 'Sent!'
            });

            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            $.post("assets/php/sendmail.php", $("#contact-action").serialize(), function (result) {
                //and after the ajax request ends we check the text returned
                if (result == 'sent') {
                    //and show the mail success div with fadeIn
                    $('#mail-success').fadeIn(500);
                } else {
                    //show the mail failed div
                    $('#mail-fail').fadeIn(500);
                    //re enable the submit button by removing attribute disabled and change the text back to Send The Message
                    $('#contact-submit').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    });

    // End
});

// ---------------------
// :: Preloader & VanillaTilt
// ---------------------

$(window).on("load", function () {
    $('body').css('overflow-y', 'visible');
    $(".loader").fadeOut(function () {
        $("#loading-mask").fadeOut("slow");
    });
    if ($(window).width() > 991) {
        VanillaTilt.init(document.querySelectorAll(".about-box"), {
            max: 25,
            speed: 400
        });
        VanillaTilt.init(document.querySelectorAll(".post-img"), {
            max: 25,
            speed: 400
        });
    }
});