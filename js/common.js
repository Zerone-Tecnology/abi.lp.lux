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


	$('.nav li a').on('click', function(e) {
		e.preventDefault() ;
		$('html, body').animate({
			scrollTop: $('#' + $(this).data('scroll')).offset().top,
		}, 1000)
		// window.console.log() ;  
	});
});

//----------

$(document).ready(function () {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

	$('.card-carousel').owlCarousel({
		// animateOut: 'slideOutDown',
		// animateIn: 'flipInX',
		// animateOut: 'fadeOut',

		items: 1,
		margin: 30,
		// stagePadding:30,
		smartSpeed: 600,
		nav: true,
		navText: ["<img src='img/prev-btn.png'>", "<img src='img/next-btn.png'>"]
	});
	$('#owl-portfolio').owlCarousel({
		// animateOut: 'slideOutDown',
		// animateIn: 'flipInY',
		// animateOut: 'fadeOut',

		items: 1,
		margin: 70,
		stagePadding: 70,
		smartSpeed: 1000,
		nav: true,
		navText: ["<img src='img/prev-btn.png'>", "<img src='img/next-btn.png'>"]
	});

	$('.carousel_img').click(function () {
		$('.item').magnificPopup({
			animateOut: 'animate__fadeIn',
			items: {
				src: $(this).prop("src")
			},
			type: 'image'
		});
	});
	$('#rashitat_smetu').magnificPopup({
		removalDelay: 500,
		callbacks: {
			beforeOpen: function () {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated ' + this.st.el.attr('data-effect'));
			}
		},
		items: {
			src: '<div class="smeta_modal_form"><h5>Оставьте заявку и получи <br>бесплатный выезд и замер объекта <br>уже сегодня</h5><input type="text" placeholder="Имя"><input type="text" placeholder="Номер телефона" id="imask_phone_number2" value="+7(7"><button class="default_btn">Жду звонка</button><div class="checkbox"><input type="checkbox"><p>Я согласен на обработку данных </p></div></div>',
			type: 'inline'
		},
	});

	// $#rashitat_smetu.open({
	// 	items: {
	// 		src: '<div class="smeta_modal_overlay" id="smeta_modal_overlay"><div class="smeta_modal_form"><h5>Оставьте заявку и получи <br>бесплатный выезд и замер объекта <br>уже сегодня</h5><input type="text" placeholder="Имя"><input type="text" placeholder="Номер телефона" id="imask_phone_number2" value="+7(7"><button class="default_btn">Жду звонка</button><div class="checkbox"><input type="checkbox"><p>Я согласен на обработку данных </p></div><div class="close_modal" id="close_modal_btn"><button><img src="img/close_modal.png" alt=""></button></div></div></div>',
	// 		type:'inline'
	// 	},
	// 	// modal: true
	// });

	setTimeout(() => {
		$('.count').each(function () {
			$(this).prop('Counter', 0).animate({
				Counter: $(this).text()
			}, {
				duration: 1500,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	}, 1000);
});