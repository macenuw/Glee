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
    });

    $('.catalog__range').ionRangeSlider({
        type: "double",
    });

    const menuBtn = document.querySelector('.header__menu-btn');
    menuBtn.addEventListener('click', function () {
        this.classList.contains("is-active") === true ? this.classList.remove("is-active") : this.classList.add("is-active");
    })

    $('.menu__link').on('click', function () {
        $('.header__menu-btn').classList.remove('is-active');
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