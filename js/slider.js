jQuery(document).ready(function () {

    startSlider($('#slider'), 20); // Slide container ID, SlideShow interval 

    function startSlider(obj, timer) {

        let id = "#" + obj.attr("id");
        let slideCount = obj.find('.slideUl li').length;
        slideWidth = obj.attr("data-width");
        let sliderUlWidth = (slideCount + 1) * slideWidth;
        let time = 2;
        let $bar,

            isPause,
            tick,
            percentTime;
        isPause = false; //false for auto slideshow

        $bar = obj.find('.progress .bar');

        // ARROW
        /* obj.append('<div class="control control_next"></div><div class="control control_prev"></div>'); */

        // DOTS
        obj.append('<div class="carousel-buttons-container"><ul class="dots">');
        let i = 0,
            addId = i + 1,
            $img = $('.slideUl .slide'),
            indexImg = $img.lenght - 1,
            clicked = 1,
            $currentImg = $img.eq(i);

        for (let a = 0; a <= slideCount - 1; a++) {
            $('.dots').append('<li class="carousel-buttons" id="carousel' + addId++ + '"></li>');
        };

        $('#carousel1').addClass('active');

        /* $('.control_next').on("click", function () {
            clicked = clicked + 1;

            if (clicked <= 3) {
                $('.carousel-buttons').removeClass("active");
                $('#carousel' + clicked).addClass("active");
            } else {
                clicked = 1;
                $('.carousel-buttons').removeClass("active");
                $('#carousel' + clicked).addClass("active");
            }
        }); */

        /* $('.control_prev').on("click", function () {
            clicked = clicked - 1;

            if (clicked > 0) {
                $('.carousel-buttons').removeClass("active");
                $('#carousel' + clicked).addClass("active");
            } else {
                clicked = indexImg + 1;
                $('.carousel-buttons').removeClass("active");
                $('#carousel' + clicked).addClass("active");
            }
        }); */




        function startProgressbar() {
            resetProgressbar();
            percentTime = 0;
            tick = setInterval(interval, timer);
        }

        function interval() {
            if (isPause === false) {
                percentTime += 1 / (time + 0.1);
                $bar.css({
                    width: percentTime + "%"
                });
                if (percentTime >= 100) {
                    moveRight();
                    startProgressbar();
                }
            }
        }

        function resetProgressbar() {
            $bar.css({
                width: 0 + '%'
            });
            clearTimeout(tick);
        }

        function startslide() {

            $(id + ' .slideUl li:last-child').prependTo(id + ' .slideUl');
            obj.find('.slideUl').css({
                width: sliderUlWidth + 'vw',
                marginLeft: -slideWidth + 'vw'
            });

            obj.find('.slideUl li:last-child').appendTo(obj.attr('id') + ' .slideUl');

        }

        if (slideCount > 1) {
            startslide();
            startProgressbar();
        } else { // hade navigation buttons for 1 slide only
            $(id + ' .control_prev').hide();
            $(id + ' .control_next').hide();
        }




        function moveLeft() {
            $(id + ' .slideUl').css({
                transition: "1s",
                transform: "translateX(" + slideWidth + "vw)"
            });

            setTimeout(function () {

                $(id + ' .slideUl li:last-child').prependTo(id + ' .slideUl');
                $(id + ' .slideUl').css({
                    transition: "none",
                    transform: "translateX(" + 0 + "vw)"
                });

                $('li.actslide').prev().addClass('actslide').next().removeClass('actslide');
            }, 1000);

            clicked = clicked - 1;

            if (clicked > 0) {
                $('.carousel-buttons').removeClass("active");
                $('#carousel' + clicked).addClass("active");
            } else {
                clicked = slideCount;
                $('.carousel-buttons').removeClass("active");
                $('#carousel' + clicked).addClass("active");
            }

        }

        function moveRight2() { // fix for only 2 slades
            $(id + ' .slideUl li:first-child').appendTo(id + ' .slideUl');


            $(id + ' .slideUl').css({
                transition: "none",
                transform: "translateX(100vw)"
            }).delay();

            setTimeout(function () {

                $(id + ' .slideUl').css({
                    transition: "1s",
                    transform: "translateX(0vw)"
                });


            }, 100, setTimeout(function () {


                $(id + ' .slideUl').css({
                    transition: "none",
                    transform: "translateX(0vw)"
                });
                $('li.actslide').next().addClass('actslide').prev().removeClass('actslide');

            }, 1000));




        }

        function moveRight() {
            if (slideCount > 2) {
                $(id + ' .slideUl').css({
                    transition: "1s",
                    transform: "translateX(" + (-1) * slideWidth + "vw)"
                });

                setTimeout(function () {

                    $(id + ' .slideUl li:first-child').appendTo(id + ' .slideUl');
                    $(id + ' .slideUl').css({
                        transition: "none",
                        transform: "translateX(" + 0 + "vw)"
                    });

                    $('li.actslide').next().addClass('actslide').prev().removeClass('actslide');
                }, 1000);
                clicked = clicked + 1;

                if (clicked <= 3) {
                    $('.carousel-buttons').removeClass("active");
                    $('#carousel' + clicked).addClass("active");
                } else {
                    clicked = 1;
                    $('.carousel-buttons').removeClass("active");
                    $('#carousel' + clicked).addClass("active");
                }
            } else {
                moveRight2();
            }
        }

        $(id + ' .control_prev').click(function () {
            moveLeft();
            startProgressbar();
        });

        $(id + ' .control_next').click(function () {

            moveRight();

            startProgressbar();
        });

        $(id + ' .progress').click(function () {
            if (isPause === false) {
                isPause = true;
            } else {
                isPause = false;
            }
        });
    };
});