//slick plugin for slider
(function ($) {
    $(function () {
        $('.slider').slick({
            // autoplay: true,
            autoplaySpeed: 3000,
            speed: 1000,
            dots: true,
            pauseOnFocus: true,
            pauseOnHover: true,
            pauseOnDotsHover: true
        });
    });
})(jQuery);


//plugin slicknav
(function ($) {
    $(function () {
        $('.nav-menu').slicknav();
    });
})(jQuery);


//FORM STYLLER
(function ($) {
    $(function () {
        $('select').styler();
    });
})(jQuery);