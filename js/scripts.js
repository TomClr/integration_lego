$(document).ready(function() {

    $('.menu > li a').on('click', function() {
        $('.menu > li a.active').removeClass('active');
        $(this).addClass('active');
    });

    $('.icon-menu').on('click', function() {
        if ($('.menu').attr('class') == 'menu menu-disabled') {
            $('.menu').removeClass('menu-disabled');
            $('.menu').addClass('menu-active');
        } else if ($('.menu').attr('class') == 'menu menu-active') {
            $('.menu').removeClass('menu-active');
            $('.menu').addClass('menu-disabled');
        };
    });

    //SLIDER
    let $carousel = $('.slider'),
    $img = $('.slider .diapo'),
    indexImg = $img.length - 1,
    i = 0,
    $currentImg = $img.eq(i);

    $img.css('display', 'none');
    $currentImg.css('display', 'block');

    // ARROW
    $carousel.append('<div class="arrow arrow-prev"></div><div class="arrow arrow-next"></div>');

    $('.arrow-next').on("click", function() {
        i++;

        if (i <= indexImg) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        } else {
            i = 0;
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
    });

    $('.arrow-prev').on("click", function() {
        i--;

        if (i >= 0) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        } else {
            i = indexImg;
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');
        }
    });

    // Defilement auto
    function slideImg() {
        setTimeout(function() {
            if (i < indexImg) {
                i++;
            } else {
                i = 0;
            }

            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.css('display', 'block');

            slideImg();
        }, 4000);
    }

    slideImg();

    // DOTS
/*     $carousel.append('<ul class="dots">');

    for (let a = 0; a <= indexImg; a++) {
        $('.dots').append('<li class="dot" data-index="' + i + '">');
    }

    $nextSlide = indexImg + 1;

    $carousel.find(".dots").find(".dot").addClass('active'); */


    // IMAGES ANIMEES
    $('#col-1').mouseover(function() {
        $('#col-1 img').attr('src', './img/lego-enjoy-plus.png');
    });

    $('#col-1').mouseout(function() {
        $('#col-1 img').attr('src', './img/lego-enjoy.png');
    });

    $('#col-2').mouseover(function() {
        $('#col-2 img').attr('src', './img/briques-lego-assemblees.png');
    });

    $('#col-2').mouseout(function() {
        $('#col-2 img').attr('src', './img/briques-lego.png');
    });

    $('#col-3').mouseover(function() {
        $('#col-3 img').attr('src', './img/travailleur-lego-hands-up.png');
    });

    $('#col-3').mouseout(function() {
        $('#col-3 img').attr('src', './img/travailleur-lego.png');
    });


});





