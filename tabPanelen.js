$('.buttons').each(function () {
	var dezeKnop = $(this);
	var actieveKnop = dezeKnop.find('li.activia');
	var link = actieveKnop.find('a');
	var activiapanel = $(link.attr('href'));

	dezeKnop.on('click', 'a', function (e) {
		e.preventDefault();
		var link = $(this);
		//        alert(link.attr('href'));
		var beoogdId = this.hash;
		//        alert(beoogdId);

		if (beoogdId && !link.parent().is('.activia')) {
			activiapanel.removeClass('activia');
			actieveKnop.removeClass('activia');

			activiapanel = $(beoogdId).addClass('activia');
			actieveKnop = link.parent().addClass('activia');
		}
	});

});

// unobrusive weghalen van niet actieve vensters
$('.panel').css('display', 'none');