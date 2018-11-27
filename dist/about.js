
$(document).ready(function() {
    $( ".menu-burger" ).click(function() {
        $( ".menu-block-left, .menu-block-right").slideToggle( "slow");
        // $('.menu').css('display', 'flex');

        // $('.menu').css('z-index', '4');
        // if(window.innerWidth >= 321) {
        //     $('.overlay').slideToggle("slow");
        // } // it`s for delete overlay for mobile-width
    });
    
    $( ".menu__close, .overlay, .menu__close-img--mob" ).click(function() {
        $( ".menu" ).slideToggle( "slow");
        if(window.innerWidth >= 321) {
            $('.overlay').slideToggle("slow");
        }
    });
});


$(document).ready(function () {
    $('.js-partners-slider').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        // autoplay: true,
        infinite: true,
        autoplaySpeed: 1500,
        responsive: [
        {
            breakpoint: 1000,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
            }
        },
    ]
    });
});



$(document).ready(function () {
    $('.partners-committee__js').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 3,
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
});


$(document).ready(function () {
    $('.media-partners__js').slick({
        dots: true,
        dotsClass: "main-dots", //customize dot`s with add class dot`s
        infinite: false,
        prevArrow: false,
        nextArrow: false,
        speed: 500,
        slidesToShow: 3,
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
}); 