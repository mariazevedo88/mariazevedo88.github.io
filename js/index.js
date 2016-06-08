/*******************************************
Author: Mariana Azevedo
Since: 06/08/2016
*******************************************/

var callback = function(){
	$('.item-skills').each(function(){
		newWidth = $(this).parent().width() * $(this).data('percent');
		$(this).width(0);
    $(this).animate({
        width: newWidth,
    }, 1000);
	});
	$('.icons-blue').each(function(){
		height = $(this).height();
    $(this).animate({
        height: 14,
    }, 2000);
	});
};
$(document).ready(callback);

var resize;
window.onresize = function() {
	clearTimeout(resize);
	resize = setTimeout(function(){
		callback();
	}, 100);
};