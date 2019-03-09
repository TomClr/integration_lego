$(document).ready(function () {

    $('.menu > li a').on('click', function () {
        $('.menu > li a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.icon-menu').on('click', function () {
        if ($('.menu').attr('class') == 'menu menu-disabled') {
            $('.menu').removeClass('menu-disabled');
            $('.menu').addClass('menu-active');
            
            /* if ($(window).width() < 715) {
                $('section.slider .arrow').css('top', '125%');
            } */
        } else if ($('.menu').attr('class') == 'menu menu-active') {
            $('.menu').removeClass('menu-active');
            $('.menu').addClass('menu-disabled');
        };
    });

    // IMAGES ANIMEES
    $('#col-1').mouseover(function () {
        $('#col-1 img').attr('src', './img/lego-enjoy-plus.png');
    });

    $('#col-1').mouseout(function () {
        $('#col-1 img').attr('src', './img/lego-enjoy.png');
    });

    $('#col-2').mouseover(function () {
        $('#col-2 img').attr('src', './img/briques-lego-assemblees.png');
    });

    $('#col-2').mouseout(function () {
        $('#col-2 img').attr('src', './img/briques-lego.png');
    });

    $('#col-3').mouseover(function () {
        $('#col-3 img').attr('src', './img/travailleur-lego-hands-up.png');
    });

    $('#col-3').mouseout(function () {
        $('#col-3 img').attr('src', './img/travailleur-lego.png');
    });
});