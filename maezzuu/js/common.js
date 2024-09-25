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
    $(this).addClass('current');
  });
  $('.gnb_menu').on('mouseleave', function () {
    const index = $('.gnb_menu').index($(this));
    $('.gnb_menu').eq(index).removeClass('currenton').stop(true, true).slideUp();
    $('.gnb_list').eq(index).removeClass('current');
  });
});



$(function(){
  $('.toggle').on('click',function(){
      const $dep3 = $(this).children('.dep3');

      $('.dep3').not($dep3).removeClass('on').slideUp();

      $dep3.toggleClass('on').slideToggle();
  });
});
