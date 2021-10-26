if ($('.company .owl-carousel').length > 0) {
    $('.company .owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        nav: false,
        autoWidth: true,
        responsive: {
            0: {
                items: 5,
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
        margin: 30,
        responsiveClass: true,
        autoplay: true,
        dots: false,
        nav: true,
        navContainer: ".testimonials-nav-container",
        autoWidth: true,
        autoHeight: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})