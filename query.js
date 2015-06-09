var screenHeight = $(window).height();
var screenWidth = $(window).width();

$(document).ready(function()
{
	var maxHeight = $(this).height();
	//readmore
	$(window).scroll(function()
	{
		var scrollPos = $(this).scrollTop();
		var newPos = scrollPos + screenHeight;
		if(newPos == maxHeight)
			newPos = 0;

		$(this).scrollTop(newPos);
	});
});