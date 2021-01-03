
	$(document).on("scroll", function(){
		if
      ($(document).scrollTop() > 86){
		  $("#banner").addClass("shrink");
		}
		else
		{
			$("#banner").removeClass("shrink");
		}
	});

	$(document).ready(function () {
		$('.navbar-light .dmenu').hover(function () {
				$(this).find('.sm-menu').first().stop(true, true).slideDown(150);
			}, function () {
				$(this).find('.sm-menu').first().stop(true, true).slideUp(105)
			});
		});
	