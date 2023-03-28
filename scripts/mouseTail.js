$('.name').bind('mousemove', function (e) {
    $('.mouse-tail').css({
        left: e.pageX +10,
        top: e.pageY +10
    });
});

$('.name').bind('mouseleave', function (e) {
    $('.mouse-tail').css({
        display: 'none'
    });
});
$('.name').bind('mouseenter', function (e) {
    $('.mouse-tail').css({
        display: 'block'
    });
});