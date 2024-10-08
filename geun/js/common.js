
  $(function() {
    var swiper = new Swiper(".mySwiper", {
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
 });

 $(function() {
  var productsSwiper = new Swiper(".productsSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".products-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".products-next",
      prevEl: ".products-prev",
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
  var hotnewSwiper = new Swiper(".hotnewSwiper", {
    slidesPerView:'auto',
    spaceBetween: 30,
    pagination: {
      el: ".hotnew-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".hotnew-next",
      prevEl: ".hotnew-prev",
    },
    breakpoints: {
      880: {
        slidesPerView:'auto', 
        spaceBetween: 14,
      },
    },
  });
});