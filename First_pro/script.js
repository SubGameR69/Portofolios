$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 50){
            $('.header').addClass("active");
        }else{
            $('.header').removeClass("active");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });
});