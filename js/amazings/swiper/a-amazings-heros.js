var swiper = new Swiper(".amazingsHeroSwiper", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  disableOnInteraction: false,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});