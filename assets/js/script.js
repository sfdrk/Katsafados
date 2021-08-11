
$(document).ready(function () {
    // const swiper = "";
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

    });

    $('.products').slick({
        // accessibility: false,
        infinite: false,
        slidesToShow: 6.5,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1025,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1
                }
            },
        ]
    });

    $('.card-container').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
            {
                breakpoint: 1042,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 427,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    $(".user-login").hover(function () {
        $(".user-submenu").css({ "display": "block", "color":"#1F2933"});
    },
        function () {
            $(".user-submenu").css({ "display": "none" });
        }
    );

    $(".diy-tools").hover(function () {
        $("tools-menu").css({ "display": "block" });
    })

    $(".flag-container").hover(function () {
        $(".sub-flag-block").css({ "display": "block" })
    }, function () {
        $(".sub-flag-block").css({ "display": "none" })
    });

    $(".header-list").hover(function () {
        $(".more-sub").css({ "display": "block" });
    },
        function () {
            $(".more-sub").css({ "display": "none" });
        });
       
    
    $(".nav-dropdown").hover(function () {
        $(this).children(".nav-submenu").css({ "display": "block" });
    },
        function () {
            $(this).children(".nav-submenu").css({ "display": "none" });
        });

    $(".all-dropdown").hover(function () {
        $(".slider-navbar").css({ "margin-left": 0});
        $(".bars").addClass("icon-x");
    },
        function () {
            $(".slider-navbar").css({ "margin-left": "-60rem" });
            $(".bars").removeClass("icon-x");
        });
    
    $(".hamberger-menu").on("click", function () {
        $(".slider-navbar").css({ "margin-left": 0 });
        $(".header-container").css({ "display": "none" });
        $(".mobile-close-header").css({ "display": "block" });
    })
    $(".mobile-close").on("click", function () {
        $(".mobile-close-header").css({ "display": "none" });
        $(".header-container").css({ "display": "flex" });
        $(".slider-navbar").css({ "margin-left": "-60rem" });
    })

    $(".li-slider").on("click", function () {
        $(this).siblings(".mobile-submenu-block").fadeToggle("display");
        $(this).children(".chevron-down").toggleClass("chevron-up");

    })
});