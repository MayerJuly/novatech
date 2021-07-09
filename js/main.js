
$(function(){
    //Slider
    $(document).ready(function(){
        $('.slider__wrapper').slick({
            slidesToShow: 3.99,
            speed:600,

    });
        //SliderAbout
        $('.slider__about').slick({
            slidesToShow: 1,
            speed:600,
            arrows: false,
            dots: true,
        });

        $('.comments__slider-1').slick({
            slidesToShow: 1,
            speed:600,
            arrows: false,
            dots: true,
        });
    });




});