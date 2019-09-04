$(function() {
    var body = $(".cover");
    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
    
        if (scroll >= 200) {
            body.removeClass('cover').addClass("cover-alt");
        } else {
            body.removeClass("cover-alt").addClass('cover');
        }
    });
});