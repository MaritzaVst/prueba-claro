$(document).ready(function(){
	var maxHeight = 0;
	var box = $("#marcas").find("li");
	box.each(function(){
		var height = $(this).height();
		if(height > maxHeight) {
			maxHeight = height;
		}
	});
	box.height(maxHeight);
});
