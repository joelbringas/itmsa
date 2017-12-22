$(document).ready(function(){
     $(window).scroll(function () {
            if ($(this).scrollTop() > 90) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        // scroll body to 0px on click
        $('#back-to-top').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 500);
            return false;
        });

});



$(function () {
  $(document).scroll(function () {
	  var $nav = $(".navbar-hidden");
	  $nav.toggleClass('scrolled', $(this).scrollTop() > 30);
	});
});
