//add class for header after scroll
var header = $('header');
var divheader = $('.header');
var windowHeight = $(window).height();
var scrol;

(function ($) {
    $(window).on('load', function () {
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
    });
})(jQuery);


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


//animate for scroll
(function ($) {
    $(window).on('load', function () {
        $('body,html').animate({scrollTop: 0}, 1);

        var animateElementGo = $('[data-animate = animate]');

        $('[data-animate = end]').addClass('animate');
        $(window).scroll(function () {
            var top = $(window).scrollTop() + ($(window).height() * 0.9);

            for (var i = 0; i < animateElementGo.length; i++) {
                if ($(animateElementGo[i]).offset().top < top) {
                    $(animateElementGo[i]).addClass('animate');
                }
            }
        });

    });
})(jQuery);


//valid form $('form').submit(function (){

    // var userBtn = $('#btn-for-contact-page');
    // userBtn.on('click',function () {
    //     var fail = false;
    //     var userName = $('#user-name').val();
    //     if(userName == "" || userName == " " ) {
    //         fail = "неправельное имя";
    //     }
    //     if(fail){
    //         alert(fail);
    //         return false;
    //     } else {
    //         return true;
    //     }
    // });



(function ($) {
    $(window).on('load', function () {
        var userBtn = $('#btn-for-contact-page');
        var regularName = /^[a-zA-Zа-яёА-ЯЁ\s\-]+$/;
        var regularEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
        var userForm = $('#contact-form');
        var errorSubject = $('.error-for-subject');


        userBtn.on('click',function () {
            var fail = false;
            var userName = $('#user-name');
            var userEmail = $('#email');
            var userSubject = $('#subject');


            if(!regularName.test(userName.val()) || userName.val() == " ") {
                fail = true;
                userName.next('span').addClass('x');
            }

            if(!regularEmail.test(userEmail.val())){
                fail = true;
                userEmail.next('span').addClass('x');
            }

            if(userSubject.val() < 1){
                fail = true;
                errorSubject.addClass('x');
            }
            if(fail){
                console.log("fail");
                return false;
            } else {
                return true;
            }
        });
        var userName = $('#user-name');
        var userEmail = $('#email');
        var userSubject = $('#subject');

        userName.on('change', function () {

            if (userName.val() !== "" && userName.val() !== " ") {
                userName.next('span').removeClass('x')
            }
        });
        userEmail.on('change', function () {

            if(regularEmail.test(userEmail.val())){
                userEmail.next('span').removeClass('x');
            }

        });

        userSubject.on('change', function () {
            if(userSubject.val() >= 1){
                errorSubject.removeClass('x');
            }
        });

    });
})(jQuery);