'use strict';

(function( $ ) {
	$(document).ready(function() {
		$('[data-toggle="offcanvas"]').click(function() {
			$('.offcanvas-wrapper, .offcanvas-navbar').toggleClass('active');
		});
	});
})( jQuery );