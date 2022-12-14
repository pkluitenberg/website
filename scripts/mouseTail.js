$('.header-text').bind('mousemove', function (e) {
    $('.mouse-tail').css({
        left: e.pageX,
        top: e.pageY
    });
});

$('.header-text').bind('mouseleave', function (e) {
    $('.mouse-tail').css({
        display: 'none'
    });
});
$('.header-text').bind('mouseenter', function (e) {
    $('.mouse-tail').css({
        display: 'block'
    });
});