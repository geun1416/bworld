
$(function() {
   AOS.init();
});


$(function() {
  if ($("header").length) {
    $(window).scroll(function() {
      let scrollTop = $(document).scrollTop();
      if (scrollTop > 800) {
        $('header').addClass('fixed');
      } else {
        $('header').removeClass('fixed');
      }
    });
  }
});


$(function() { 
  $('.topBtn').css('display','none');
  $(window).scroll(function() { if ($(this).scrollTop() > 300) { 
    $('.topBtn').fadeIn();
      } else { 
        $('.topBtn').fadeOut(); 
      } 
  });
	$('.topBtn').click(function(){
		$('html, body').animate({scrollTop:0},500);
	});
});


// $(function() {
//   $(".menu ul li").on("mouseenter", function() {
//     $(this).addClass("on");
//   });
// });
// $(function() {
//   $(".menu ul li").on("mouseleave", function() {
//     $(this).removeClass("on");
//   });
// });


$(function() {
  var mySwiper = new Swiper('.meimg_slide', {
    slidesPerView: 1, // 한 번에 표시할 슬라이드 수
    loop: true, // 슬라이드 루프(무한 회전) 활성화
    autoplay: {
        delay: 2000, // 2초마다 자동 재생
        disableOnInteraction: false // 사용자 상호 작용 후에도 자동 재생 유지
    },
    effect: 'fade', // 페이드 인/아웃 효과
    direction: 'horizontal', // 슬라이드 방향 (수평)
    touchRatio: 1, // 슬라이드 드래그 감도
    mousewheel: false, // 마우스 휠로 슬라이드 이동 가능
    centeredSlides: true, // 슬라이드 중앙 정렬
    watchOverflow: true // 슬라이드가 화면을 넘어갈 때의 처리 설정
  });
});
