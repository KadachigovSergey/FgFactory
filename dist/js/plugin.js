//add class for header after scroll
var header = $('header');
var divheader = $('.header');
var windowHeight = $(window).height();
var scrol;


$(window).on('scroll', function(){
    var scrollTop = $(window).scrollTop();

    if(scrol > scrollTop){
        header.addClass('header-down');
        scrol = scrollTop;
    }else {
        header.removeClass('header-down');
        scrol = scrollTop;
    }

    if( scrollTop  > windowHeight/3){
        header.addClass('fixed');
        divheader.addClass('is-fixed');
    } else{
        divheader.removeClass('is-fixed');
        header.removeClass('fixed');
    }
});

(function ($){
    $(window).on('load', function () {
        var prev = $('.slick-prev');
        var next = $('.slick-next');

        var parentCarousel, curentSlide, nextSlide, prevSlide;

        function addClassSlider(self, elem){
            parentCarousel = $(self).closest('.slider');
            curentSlide =  $(parentCarousel).find('.slick-current');

            nextSlide =  curentSlide.next('.slick-slide');
            prevSlide =  curentSlide.prev('.slick-slide');


            if(elem == 'next'){
                $(curentSlide).addClass('translate-left');
                $(nextSlide).addClass('translate-left');
                $(prevSlide).addClass('translate-left');
            }  else{
                $(curentSlide).addClass('translate-right');
                $(prevSlide).addClass('translate-right');
                $(nextSlide).addClass('translate-right');
            }

        }

        next.on('mouseover', function(){
            addClassSlider(this, 'next');
        });
        next.on('mouseout', function () {
            $(curentSlide).removeClass('translate-left');
            $(nextSlide).removeClass('translate-left');
            $(prevSlide).removeClass('translate-left');
        });
        prev.on('mouseover', function(){
            addClassSlider(this, "prev");
        });
        prev.on('mouseout', function () {
            $(curentSlide).removeClass('translate-right');
            $(prevSlide).removeClass('translate-right');
            $(nextSlide).removeClass('translate-right');
        })
    })
})(jQuery);
