$(function () {
    $('.menu__btn').on('click', function () {
        $('.header__list').toggleClass('header__list_active')
    })
    $('.menu__btn').on('click', function () {
        $('.center-wrapper').toggleClass('center-wrapper_hidden')
    })
    
    $('.susan__about').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
    });
});


