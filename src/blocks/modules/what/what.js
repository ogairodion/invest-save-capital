import { Swiper, Navigation } from 'swiper';

Swiper.use(Navigation);

const whatSlider = new Swiper(".what__slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
      nextEl: ".what .slider-arrow-next",
      prevEl: ".what .slider-arrow-prev",
    },
    resistance: true,
    resistanceRatio: 0,
    breakpoints: {
      767: {
        slidesPerView: 3,
      },
    },
});