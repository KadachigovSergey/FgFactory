//add class for header after scroll
var header = $('header');
var divheader = $('.header');
var windowHeight = $(window).height();


var element = $('.sm-6');
var element2 = $('.content-for-block');
$(window).on('resize load', function () {
    var elementWidth = element.width();
    if(elementWidth < 992){
        element2.css({'height': elementWidth/1});
    }
});

$(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();

    if( scrollTop  > windowHeight/3){
        divheader.addClass('is-fixed');
    } else{
        divheader.removeClass('is-fixed');
    }
});

//pursuingNav plugin revers scroll for header
$(function(){
    header.pursuingNav();
});
//slick plugin for slider
$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    speed:1000,
    dots: true,
    arrows: false
});

$(function(){
    $('.nav-menu').slicknav();
});