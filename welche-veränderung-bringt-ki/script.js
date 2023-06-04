$(document).ready(function(){
    $(window).on('scroll', function(){
        if ($(window).scrollTop()) {
            $("header").addClass('shrink');
        }else{
            $("header").removeClass('shrink');
        }
    });
});