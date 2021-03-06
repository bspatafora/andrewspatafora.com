$(document).ready(function() {

  $('#main').hover(function() {
    $('#play').fadeTo(500, 0.5);
      }, function() {
           $('#play').fadeTo(500, 0.2);
  });

	$('#main').click(function() {
    $('#about').show();
    $("#about").attr('src', $("#about").attr('src') + '&autoplay=1');
  });

  $('#about').bind('finish', function() {
    $(this).hide();
  });

	$('#photo-link').removeAttr('href');
	$('#photo-link').click(function() {
		$('html, body').animate({
			scrollTop: $('#photos').offset().top
		}, 500);
	});

	$('#video-link').removeAttr('href');
	$('#video-link').click(function() {
		$('html, body').animate({
			scrollTop: $('#videos').offset().top
		}, 500);
	});

	$('#resume-link').removeAttr('href');
	$('#resume-link').click(function() {
		$('html, body').animate({
			scrollTop: $('#resume').offset().top
		}, 500);
	});

	$('#contact-link').removeAttr('href');
	$('#contact-link').click(function() {
		$('html, body').animate({
			scrollTop: $('#contact').offset().top
		}, 500);
	});

	$('#photo-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image'
	});

  $('#recently-photo-wrapper').magnificPopup({
		delegate: 'a',
		type: 'image'
	});

	$('.photo').waypoint(function() {
		$(this).animate({
			top: '-=6em'
		}, 350);
	}, { offset: '80%', triggerOnce: true });

	$('.photo2').waypoint(function() {
		$(this).animate({
			top: '-=6em'
		}, 350);
	}, { offset: '65%', triggerOnce: true });

	$('.line').waypoint(function() {
		$(this).addClass('animated fadeInRight')
	}, { offset: '97.5%', triggerOnce: true });

	$('.half-line').waypoint(function() {
		$(this).addClass('animated fadeInRight')
	}, { offset: '97.5%', triggerOnce: true });

	$('.resume').waypoint(function() {
		$(this).addClass('animated fadeInRight')
	}, { offset: '97.5%', triggerOnce: true });

	$('#email').waypoint(function() {
		$(this).addClass('animated swing')
	}, { offset: '90%', triggerOnce: true });

});
