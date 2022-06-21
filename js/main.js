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



// document.querySelectorAll('.right_arrow').forEach(elm => {
// 	elm.onclick = function () {
// 		let div = this.parentNode.querySelector('.Portfolio_list ul');
// 		div.scrollLeft += (div.clientWidth / 2);
// 	};
// });