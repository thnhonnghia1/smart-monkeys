var menu_mobi = $('ul.menu_desktop').html();
$('.menu_mobi_add').append('<span class="close_menu">X</span><ul>' + menu_mobi + '</ul>');
$(".menu_mobi_add ul li").each(function (index, element) {
    if ($(this).children('ul').children('li').length > 0) {
        $(this).children('a').append('<i class="fas fa-chevron-right"></i>');
    }
});
$(".menu_mobi_add ul li a i").click(function () {
    if ($(this).parent('a').hasClass('active2')) {
        $(this).parent('a').removeClass('active2');
        if ($(this).parent('a').parent('li').children('ul').children('li').length > 0) {
            $(this).parent('a').parent('li').children('ul').hide(300);
            return false;
        }
    }
    else {
        $(this).parent('a').addClass('active2');
        if ($(this).parents('li').children('ul').children('li').length > 0) {
            $(".menu_m ul li ul").hide(0);
            $(this).parents('li').children('ul').show(300);
            return false;
        }
    }
});

$('.icon_menu_mobi,.close_menu,.menu_baophu').click(function () {
    if ($('.menu_mobi_add').hasClass('menu_mobi_active')) {
        $('.menu_mobi_add').removeClass('menu_mobi_active');
        $('.menu_baophu').fadeOut(300);
    }
    else {
        $('.menu_mobi_add').addClass('menu_mobi_active');
        $('.menu_baophu').fadeIn(300);
    }
    return false;
});


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
