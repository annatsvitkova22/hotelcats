$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

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


function initMap() {
    var directionsDisplay = new google.maps.DirectionsRenderer;
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 59.9387942, lng: 30.3230833}
    });
    directionsDisplay.setMap(map);

    new google.maps.Marker({
        position: {lat: 59.9387942, lng: 30.3230833},
        map: map,
        icon: 'static/marker.svg',
    });
}

window.onload = function() {
    var burgerMenu = document.querySelector('.burger-menu');
    var burgerIcon = document.querySelector('.menu-icon'); 
    var menuItem = document.querySelector('.menu-item');

    burgerMenu.onclick = function () {
        menuItem.classList.toggle('menu-active');
        burgerIcon.classList.toggle('burger-active')
    };
}
