$(document).ready(function () {
    $('.intro-slider').slick({
        dots: true,
        dotsClass: "intro-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        // autoplay: true,
        infinite: true,
        autoplaySpeed: 2000,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    });



    $('.js-partners-slider').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        // autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1200,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 820,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 620,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1
            }
        },
        {
            breakpoint: 430,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
        }
    ]
    });


    $('.js-event-link-slider').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 8,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        // autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1800,
            settings: {
            slidesToShow: 6,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1250,
            settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
        {
            breakpoint: 500,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        }]
    });
})

