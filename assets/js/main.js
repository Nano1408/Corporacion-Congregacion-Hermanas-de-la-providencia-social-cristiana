$(document).ready(function(){
	$('.menu .menu-items a:first').addClass('active');
	$('#secciones section').hide();
	$('#secciones section:first').show();

	$('ul.menu .menu-items a').click(function(){
		$('ul.menu .menu-items a').removeClass('active');
		$(this).addClass('active');
		$('#secciones section').hide();

		var activeTab = $(this).attr('href');
		$(activeTab).show();
		return false;
	});
});