// Préloader
$(window).on("load", function () {
    $('.loader').fadeOut("slow");
});

$(document).ready(function () {

    $('.menu > li a').on('click', function () {
        $('.menu > li a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.icon-menu').on('click', function () {
        if ($('.menu').attr('class') == 'menu menu-disabled') {
            $('.menu').removeClass('menu-disabled');
            $('.menu').addClass('menu-active');
        } else if ($('.menu').attr('class') == 'menu menu-active') {
            $('.menu').removeClass('menu-active');
            $('.menu').addClass('menu-disabled');
        };
    });

    // IMAGES ANIMEES
    function animImg(selecteur, url, urlChange) {
        $(selecteur).mouseover(function () {
            $(selecteur + ' img').attr('src', urlChange);
        });
        $(selecteur).mouseout(function () {
            $(selecteur + ' img').attr('src', url)
        });
    }

    animImg('#col-1', './img/lego-enjoy.png', './img/lego-enjoy-plus.png');
    animImg('#col-2', './img/briques-lego.png', './img/briques-lego-assemblees.png');
    animImg('#col-3', './img/travailleur-lego.png', './img/travailleur-lego-hands-up.png');
});