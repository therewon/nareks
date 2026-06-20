
const bottomHeader = document.getElementById("bottomHeader");



window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        bottomHeader.classList.add("py-0");
        bottomHeader.classList.remove("py-2");
    } else {
        bottomHeader.classList.remove("py-0");
        bottomHeader.classList.add("py-2");
    }
});



const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
        delay: 3000,
    },
    speed: 600,

    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

// Card Slider

const swiperProjects = new Swiper(".swiper-projects", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination-projects",
        clickable: true, 
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, 
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
     breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 3,
        },
    }
});

const swiperReferences = new Swiper(".swiper-references", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 20,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 3000, 
    },
    scrollbar: {
        el: ".swiper-scrollbar",
    },
     breakpoints: {
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 5,
        },
    }
});


