    /*========== sticky navbar ==========*/
window.onscroll = () => {
    let header = document.querySelector(".header")

    header.classList.toggle("sticky", window.scrollY > 100);
}

/*========== remove menu icon navbar when click navbar link (scroll) ==========*/




/*========== swiper ==========*/
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*========== dark light mode ==========*/


/*========== scroll reveal ==========*/