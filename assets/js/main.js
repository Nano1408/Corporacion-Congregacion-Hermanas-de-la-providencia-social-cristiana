$(document).ready(function(){
	$('ul.menu li a:first').addClass('active');
	$('#secciones section').hide();
	$('#secciones section:first').show();

	$('ul.menu li a').click(function(){
		$('ul.menu li a').removeClass('active');
		$(this).addClass('active');
		$('#secciones section').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});