$(function () {
    menu = $('nav ul');

    $('#openup').on('click', function (e) {
        e.preventDefault();
        menu.slideToggle();
    });

    $(window).resize(function () {
        var w = $(this).width();
        if (w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function (e) {
        var w = $(window).width();
        if (w < 480) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());

    function pageScroll() {
        window.scrollBy(0, 50); // horizontal and vertical scroll increments
        scrolldelay = setTimeout('pageScroll()', 100); // scrolls every 100 milliseconds
    }
});