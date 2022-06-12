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
document.querySelectorAll('.right_arrow').forEach(elm => {
	elm.onclick = function () {
		let div = this.parentNode.querySelector('.Portfolio_list ul');
		div.scrollLeft += (div.clientWidth / 2);
	};
});