$(window).ready(
	$("body").css("margin-bottom", function(){
		return $("footer.footer").height();
	})
);

$(window).resize(function(){
	$("body").css("margin-bottom", function(){
		return $("footer.footer").height();
	})
});
