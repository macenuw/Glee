$(function(){
    $('.new-trends__slider').slick({
        dots: true,
        arrows: false,
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
