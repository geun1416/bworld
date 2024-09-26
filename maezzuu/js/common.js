/* gnb 마우스 hover시 풀다운메뉴 */
/* .current - 하단메뉴 내려갈시 gnb_list css유지 */
/* .currenton - gnb1~5번 각각의 하단메뉴 슬라이드*/
$(function () {
  $('.gnb_list').on('mouseover', function () {
    $('.gnb_list').removeClass('current');
    $('.gnb_menu').removeClass('currenton').stop(true, true).slideUp();

    $(this).addClass('current');

    const index = $(this).index();
    $('.gnb_menu').eq(index).addClass('currenton').stop(true, true).slideDown();
  });

  $('.gnb_menu').on('mouseenter', function () {
    const index = $('.gnb_menu').index($(this));
    $('.gnb_list').eq(index).addClass('current');
  });

  $('.gnb_list').on('mouseleave', function () {
    $(this).removeClass('current');
  });

  $('header').on('mouseleave', function () {
    $('.gnb_menu').each(function(index) {
      $(this).removeClass('currenton').stop(true, true).slideUp();
      $('.gnb_list').eq(index).removeClass('current');
    });
  });
});






/* dep2 클릭시 dep3 슬라이드토글 */
$(function() {
  $('.toggle').on('click', function() {
    const $dep3 = $(this).children('.dep3');

    $('.dep3').not($dep3).removeClass('on').slideUp();
    $('.toggle').toggleClass('active');
    $('.toggle').not(this).removeClass('active');

    if ($dep3.hasClass('on')) {
      $dep3.removeClass('on').slideUp();
    } else {
      $dep3.addClass('on').slideDown();
    }
  });
});

$(function(){
  $('.login').on('mouseover', function() {
      $('.logintext').css('display', 'block');
  }).on('mouseout', function() {
      $('.logintext').css('display', 'none');
  });
});

