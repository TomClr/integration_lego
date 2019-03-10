//SLIDER
startSlider($('#slider'), 20);

function startSlider(obj, timer) {

    let id = "#" + obj.attr("id");
    let slideCount = obj.find('.diapo').length;
    let $bar,
        tick,
        percentTime,
        $carousel = $('.slider'),
        $img = $('.slider .diapo'),
        indexImg = $img.length - 1,
        i = 0,
        clicked = 1,
        $currentImg = $img.eq(i);

    $img.css('display', 'none');
    $currentImg.css('display', 'block');

    $bar = obj.find('.progress .bar');

    function startProgressbar() {
        resetProgressbar();
        percentTime = 0;
        tick = setInterval(interval, timer);
    }

    function interval() {
        percentTime += 0.5;
        $bar.css({
            width: percentTime + "%"
        });
        if (percentTime >= 100) {
            startProgressbar();
            slideImg();
        }
    }

    function resetProgressbar() {
        $bar.css({
            width: 0 + '%'
        });
        clearTimeout(tick);
    }

    if (slideCount > 1) {
        $carousel.append('<div class="arrow arrow-prev"></div><div class="arrow arrow-next"></div>');
        $carousel.append('<div class="carousel-buttons-container"><ul class="dots">');

        startProgressbar();
    } else {
        $(id + ' .arrow-prev').hide();
        $(id + ' .arrow-next').hide();
        $(id + '.carousel-buttons-container');
    }

    // ARROW
    $('.arrow-next').on("click", function () {
        percentTime = 0;
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
        percentTime = 0;

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

        if (i < indexImg) {
            i++;
        } else {
            i = 0;
        }

        if (clicked > indexImg) {
            clicked = 0;

        }

        $img.css('display', 'none');
        $currentImg = $img.eq(clicked);
        $currentImg.fadeIn("slow");

        clicked = i + 1;
        $('.carousel-buttons').removeClass("active");
        $('#carousel' + clicked).addClass("active");

    }

    // DOTS
    let addId = i + 1;

    for (let a = 0; a <= indexImg; a++) {
        $('.dots').append('<li class="carousel-buttons" id="carousel' + addId++ + '"></li>');
    }

    $('.carousel-buttons').click(function () {
        percentTime = 0;

        let findIdClicked = $(this).attr("id");
        let splitString = findIdClicked.split("carousel");
        let findTheNumb = splitString[1];

        /* clicked = findTheNumb; */

        $img.css('display', 'none');
        $currentImg = $img.eq(findTheNumb - 1);
        $currentImg.fadeIn("slow");

        $(".carousel-buttons").removeClass("active");
        $(this).addClass("active");
    });

    $('.carousel-buttons-container').find("li").first().addClass("active");

}