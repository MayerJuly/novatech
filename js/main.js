
$(function(){
    //Slider
    $(document).ready(function(){
        $('.slider__wrapper').slick({
            slidesToShow: 3.99,
            speed:600,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 820,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 651,
                    settings: {
                        slidesToShow: 1,
                    }
                }
        ]


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