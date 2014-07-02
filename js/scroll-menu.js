$(window).scroll(function () {
     var sc = $(window).scrollTop()
    if (sc > 200) {
        $( "#header" ).animate({
		    height:"40px"
			},1500 );
    } else {
        //$("#header").animate({
		    //height:"70px"
			//},1500 );
    }
});