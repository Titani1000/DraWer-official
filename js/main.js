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
	$('.slider').slick({
		autoplay: true,
		infinite: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev"></div>',
		nextArrow: '<div class="slick-next"></div>',
		centerMode: true,
		variableWidth: true,
		dots: false,
	});