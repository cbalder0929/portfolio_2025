// Working Navigation Toggle
document.querySelector('.navToggle').addEventListener('click', () => {
    document.querySelector('.nav-menu').classList.toggle('hidden');
});

// Corrected Carousel Code
const carouselButtons = document.querySelectorAll("[data-carousel-button]");

carouselButtons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]");
        const activeSlide = slides.querySelector("[data-active]");
        const slidesArray = [...slides.children];
        let newIndex = slidesArray.indexOf(activeSlide) + offset;

        if (newIndex < 0) newIndex = slidesArray.length - 1;
        if (newIndex >= slidesArray.length) newIndex = 0;

        slidesArray[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});
	
