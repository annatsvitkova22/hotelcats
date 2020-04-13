$(document).ready(function(){
    $('.slider-rooms').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendArrows: $('.scroll'),
        prevArrow: '#rooms-scroll-left',
        nextArrow: '#rooms-scroll-right',
    });
});

$(document).ready(function(){
    $('.slider-reviews').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        appendArrows: $('.scroll'),
        prevArrow: '#scroll-left',
        nextArrow: '#scroll-right',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                slidesToShow: 2
                }
            },
            {
                breakpoint: 375,
                settings: {
                slidesToShow: 1
                }
            }
        ]
    });
});
