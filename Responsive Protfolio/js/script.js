/*========== scroll sections active links ==========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");



/*========== sticky navbar ==========*/
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");
        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector("header nav a[href*=" + id +"]").classList.add("active");
            });
        }
    });

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