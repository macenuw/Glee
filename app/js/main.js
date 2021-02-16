$(function () {
    $('.new-trends__slider').slick({
        dots: true,
        arrows: false,
    });

    $('.header__menu-btn, .menu__link').on('click', function () {
        $('.menu').toggleClass('menu--active');
    });

    $('.partners__slider').slick({
        dots: false,
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });


    $(".star").rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
      });


    $('.filters__range').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filters__min').text('$'+data.from+'.00');
            $('.filters__max').text('$'+data.to+'.00');
        },
        onChange: function (data) {
            $('.filters__min').text('$'+data.from+'.00');
            $('.filters__max').text('$'+data.to+'.00');
        },
    });

    var menuBtn = document.querySelector('.header__menu-btn');
    menuBtn.addEventListener('click', function () {
        this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
    });

    $('.menu__link').on('click', function () {
        $('.header__menu-btn').removeClass('is-active');
    });


    var mixer1 = mixitup('.week-product__items', {
        selectors: {
            control: '.week-product .control__btn'
        }
    });
    var mixer2 = mixitup('.new-design__items', {
        selectors: {
            control: '.new-design .control__btn'
        }
    });
})