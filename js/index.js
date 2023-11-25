jQuery(window).scroll(function () {
    if ($(window).scrollTop() >= 120) {
        $('header').addClass('ctm-sticky-header');
    } else {
        $('header').removeClass('ctm-sticky-header');
    }
});