
  $(function() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 });

 $(function() {
  var swiper = new Swiper(".productsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      880: {
        slidesPerView: 1, 
        spaceBetween: 14,
      },
    },
  });
});


$(function() {
  var swiper = new Swiper(".hotnewSwiper", {
    slidesPerView:'auto',
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      880: {
        slidesPerView:'auto', 
        spaceBetween: 14,
      },
    },
  });
});