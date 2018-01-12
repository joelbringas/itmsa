$(document).ready(function() {   
            var $body   = $(document.body);
var navHeight = $('.navbar').outerHeight(true) + 10;


$('#sidebar').affix({
      offset: {
        top: 245,
        bottom: 700
      }
});


$body.scrollspy({
	target: '#leftCol',
	offset: navHeight
}); 
        });