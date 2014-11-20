$(document).ready(function () {
	$('.jumbotron, .product-features').hide().fadeIn(1000);
});
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".btn-topnav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 490) {
            header.removeClass('btn-topnav').addClass("btn-topnav-solid");
        } else {
            header.removeClass("btn-topnav-solid").addClass('btn-topnav');
        }
    });
});
