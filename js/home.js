function scrollTocuon($vitri) {
    $('html, body').animate({
        scrollTop: $($vitri).offset().top
    }, 'slow');
    return false;
}
lightGallery(document.getElementById('lightgallery'));
$(window).scroll(function () {
    if ($(window).scrollTop() >= $(".header").height()) $(".menu").addClass('menu-fix');
    else $(".menu").removeClass('menu-fix');
});
$("#pre-loader").fadeOut(4500);
$('[data-fancybox]').fancybox();

$('body').append('<div id="toptop" title="Lên đầu trang"><i class="fas fa-arrow-circle-right"></i></div>');
$(window).scroll(function () {
    if ($(window).scrollTop() != 0) {
        $('#toptop').fadeIn();
    } else {
        $('#toptop').fadeOut();
    }
});

$('#toptop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
});
