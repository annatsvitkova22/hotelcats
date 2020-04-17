$(document).ready(function(){
    $(".navbar").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

$(document).ready(function(){
    $('.slider-rooms').slick({
        dots: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.slick-dots'),
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
        appendDots: $('.reviews-slick-dots'),
        appendArrows: $('.scroll'),
        prevArrow: '#scroll-left',
        nextArrow: '#scroll-right',
    });
});


function initMap() {
    const directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
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
    const burgerMenu = document.querySelector('.burger-menu');
    const burgerIcon = document.querySelector('.menu-icon'); 
    const menuItem = document.querySelector('.menu-item');
    const body = document.querySelector('body');

    burgerMenu.onclick = function () {
        menuItem.classList.toggle('menu-active');
        burgerIcon.classList.toggle('burger-active')
        body.classList.toggle('body-hidden')
    };
}

$(document).ready(function() {
    $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
    });
});