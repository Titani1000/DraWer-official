// ハンバーガーメニュー
$(".btn_menu").click(function () {
	$(this).toggleClass('active');
    $(".menu_nav").toggleClass('menu_active');
    $(".circle_bg").toggleClass('circle_active');
});

$(".menu_nav a").click(function () {
    $(".btn_menu").removeClass('active');
    $(".menu_nav").removeClass('menu_active');
    $(".circle_bg").removeClass('circle_active');
});

// ポートフォリオ部分
  const swiper = new Swiper('.Portfolio_list', {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 768px
    768: {
      slidesPerView: 3,
      spaceBetween: 15
    },
    // when window width is >= 1024px
    1024: {
      slidesPerView: 4,
      spaceBetween: 20
    }
  }
});



// スライドショー一定間隔ごとにCSSアニメーションを繰り返す
// $(function(){
//   $(".slide_wrapper .slide_item").css({"position":"relative"});
//   $(".slide_wrapper .slide_item").hide().css({"position":"absolute"});
//   $(".slide_wrapper .slide_item:first").addClass("slide");
//   $(".slide_wrapper .slide_item:nth-child(2)").css({"display":"block"});
//   setInterval(function(){
//     var $active = $(".slide_wrapper .slide_item.slide");
//     var $next = $active.next(".slide_item").length?$active.next(".slide_item"):$(".slide_wrapper .slide_item:first");
//     var $nextnext = $next.next(".slide_item");
//     $active.fadeOut(0).removeClass("slide");
//     $next.show().addClass("slide");
//     $nextnext.css({"display":"block"});
//   },5000);
// });