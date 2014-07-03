$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 200) {
        $( "#header" ).animate({
		    height:"40px"
			},500 );
    }
    if (sc < 200) {
        var status = 0;
        $("#header").animate({
            height:"100px"
            },500 );
    }
});