$('.header-text').bind('mousemove', function (e) {
    $('.mouse-tail').css({
        left: e.pageX +10,
        top: e.pageY +10
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