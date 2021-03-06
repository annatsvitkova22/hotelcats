$(window).on('load', () => {
    $(".navbar").on("click","a", function (event) {
        event.preventDefault();
        const id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });


    const burgerIcon = document.querySelector('.menu-icon'); 
    const menuItem = document.querySelector('.menu-item');
    const body = document.querySelector('body');

    $(".burger-menu").on("click", function (event) {
        event.preventDefault();
        menuItem.classList.toggle('menu-active');
        burgerIcon.classList.toggle('burger-active')
        body.classList.toggle('body-hidden')
    });

    $('.slider-rooms').slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        appendDots: $('.slick-dots'),
        prevArrow: '#rooms-scroll-left',
        nextArrow: '#rooms-scroll-right',
    });

    $('.slider-reviews').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true,
        appendDots: $('.reviews-slick-dots'),
        prevArrow: '#scroll-left',
        nextArrow: '#scroll-right',
    });

    const directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 17,
        center: {lat: 59.9387942, lng: 30.3230833}
    });
    directionsDisplay.setMap(map);

    new google.maps.Marker({
        position: {lat: 59.9387942, lng: 30.3230833},
        map: map,
        icon: 'assets/images/marker.svg',
    });
});
