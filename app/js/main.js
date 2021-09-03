$(function () {
    $('.details__link').on('click', function (e) {
        e.preventDefault();
        $('.details__link').removeClass('details__link--active');
        $(this).addClass('details__link--active');

        $('.details__content-item').removeClass('details__content-item--active');
        $($(this).attr('href')).addClass('details__content-item--active');
    })




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
    $('.product__preview').slick({
        asNavFor: '.product__show',
        focusOnSelect: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        draggable: false,
        arrows: false,
    });
    $('.product__show').slick({
        asNavFor: '.product__preview',
        draggable: false,
        arrows: false,
    });

    $(".star").rateYo({
        starWidth: "11px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
    });

    $('.related-product__slider').slick({
        dots: false,
        arrows: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        centerPadding: '160px',
        responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });

    $(".product-card__star, .product__star").rateYo({
        starWidth: "17px",
        spacing: "15px",
        normalFill: "#d6d6d6",
        ratedFill: "#ffcc00",
        readOnly: true,
    });

    $('.control-style__styler, .product__number').styler();

    $('.filters__range').ionRangeSlider({
        type: "double",
        prefix: "$",
        onStart: function (data) {
            $('.filters__min').text('$' + data.from + '.00');
            $('.filters__max').text('$' + data.to + '.00');
        },
        onChange: function (data) {
            $('.filters__min').text('$' + data.from + '.00');
            $('.filters__max').text('$' + data.to + '.00');
        },
    });



    var menuBtn = document.querySelector('.header__menu-btn');
    menuBtn.addEventListener('click', function () {
        this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
    });

    $('.menu__link').on('click', function () {
        $('.header__menu-btn').removeClass('is-active');
    });

    $('.control-style__btn').on('click', function () {
        $('.control-style__btn').removeClass('control-style__btn--active');
        $(this).addClass('control-style__btn--active');
    });

    $('.control-style__btn--grid').on('click', function () {
        $('.product-card').removeClass('product-card--list');
    });

    $('.control-style__btn--list').on('click', function () {
        $('.product-card').addClass('product-card--list');
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
});