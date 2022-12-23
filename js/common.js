// $(document).ready(function(){
// 	$(".owl-carousel").owlCarousel();
// });
$(function () {

	//SVG Fallback
	if (!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function () {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if ($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch (err) {

	};

	$("img, a").on("dragstart", function (event) { event.preventDefault(); });

});

$(document).ready(function(){

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$('.card-carousel').owlCarousel({
		// animateOut: 'slideOutDown',
		// animateIn: 'flipInX',
		// animateOut: 'fadeOut',

		items:1,
		margin:30,
		// stagePadding:30,
		smartSpeed:600,
		nav: true,
		navText: ["<img src='img/prev-btn.png'>","<img src='img/next-btn.png'>"]
	});
	$('#owl-portfolio').owlCarousel({
		// animateOut: 'slideOutDown',
		// animateIn: 'flipInY',
		// animateOut: 'fadeOut',

		items:1,
		margin:70,
		stagePadding:70,
		smartSpeed:1000,
		nav: true,
		navText: ["<img src='img/prev-btn.png'>","<img src='img/next-btn.png'>"]
	});
});