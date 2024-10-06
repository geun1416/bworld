var swiper = new Swiper(".mySwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".suggestSwiper", {
  slidesPerView: 3, // 기본값: PC에서 3개
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
    // 모바일 설정
    768: {
      slidesPerView: 1, // 모바일에서 1개
      spaceBetween: 10,
    },
  },
});


var swiper = new Swiper(".hotnewSwiper", {
  slidesPerView: 'auto',
  spaceBetween: 2,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    // 모바일 설정
    768: {
        slidesPerView: 2, // 한 줄에 2개 보이게 설정
        spaceBetween: 2,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
      
    },
  },
});

var swiper = new Swiper(".serviceSwiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/* 태블릿 768px */
$(function(){
  $('.favorites_btn').on('click',function(){
    $('.favorites .open').toggleClass('on');
  });
});
