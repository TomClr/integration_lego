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

/*     //SLIDER
    let $carousel = $('.slider'),
        $img = $('.slider .diapo'),
        indexImg = $img.length - 1,
        i = 0,
        clicked = 1,
        hasBeenClicked = false;
        $currentImg = $img.eq(i);

    $img.css('display', 'none');
    $currentImg.css('display', 'block');

    // BARRE DEFILEMENT


    // ARROW
    $carousel.append('<div class="arrow arrow-prev"></div><div class="arrow arrow-next"></div>');

    $('.arrow-next').on("click", function () {
        hasBeenClicked = true;
        i++;

        if (i <= indexImg) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn("slow");
        } else {
            i = 0;
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn("slow");
        }

        clicked = clicked + 1;

        if (clicked <= 3) {
            $('.carousel-buttons').removeClass("active");
            $('#carousel' + clicked).addClass("active");
        } else {
            clicked = 1;
            $('.carousel-buttons').removeClass("active");
            $('#carousel' + clicked).addClass("active");
        }

    });

    $('.arrow-prev').on("click", function () {
        i--;

        if (i >= 0) {
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn("slow");
        } else {
            i = indexImg;
            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn("slow");
        }

        clicked = clicked - 1;

        if (clicked > 0) {
            $('.carousel-buttons').removeClass("active");
            $('#carousel' + clicked).addClass("active");
        } else {
            clicked = indexImg + 1;
            $('.carousel-buttons').removeClass("active");
            $('#carousel' + clicked).addClass("active");
        }
    });

    // Defilement auto
    function slideImg() {
        let timeOutHandle = setInterval(function () {
            if (i < indexImg) {
                i++;
            } else {
                i = 0;
            }

            $img.css('display', 'none');
            $currentImg = $img.eq(i);
            $currentImg.fadeIn("slow");

            clicked = i + 1;
            $('.carousel-buttons').removeClass("active");
            $('#carousel' + clicked).addClass("active");
            
        }, 4000);
        
    }

    slideImg();

    // DOTS
    $carousel.append('<div class="carousel-buttons-container"><ul class="dots">');
    let addId = i + 1;

    for (let a = 0; a <= indexImg; a++) {
        $('.dots').append('<li class="carousel-buttons" id="carousel' + addId++ + '"></li>');
    }

    $('.carousel-buttons').click(function () {
        let findIdClicked = $(this).attr("id");
        let splitString = findIdClicked.split("carousel");
        let findTheNumb = splitString[1];

        $img.css('display', 'none');
        $currentImg = $img.eq(findTheNumb - 1);
        $currentImg.fadeIn("slow");

        $(".carousel-buttons").removeClass("active");
        $(this).addClass("active");
    });

    $('.carousel-buttons-container').find("li").first().addClass("active"); */




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