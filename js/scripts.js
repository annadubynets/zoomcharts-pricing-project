if ($('.company .owl-carousel').length > 0) {
    $('.company .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: false,
        dots: false,
        nav: false,
        autoWidth: true,
        responsive: {
            0: {
                items: 5,
                autoplay: true,
                stagePadding: 60,
            },
            768: {
                items: 4
            },
            1200: {
                items: 6
            }
        }
    })
}

if ($('.testimonials .owl-carousel').length > 0) {
    $('.testimonials .owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoHeight: true,
        dots: false,
        nav: true,
        items: 1,
        navContainer: ".testimonials-nav-container",
        singleItem: true,
    })
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})