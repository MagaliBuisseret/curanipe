import $ from 'jquery';
import 'popper.js';
import 'bootstrap';

$(function() {
  const navbar = $( "nav.navbar" );

  // navbar: change bg-color on scroll
  window.onscroll = function() {

    if ( window.pageYOffset > 150 || document.documentElement.scrollTop > 150 || document.body.scrollTop > 150 ) {
      navbar.addClass("navbar-scrolling");
    }
    else {
      navbar.removeClass("navbar-scrolling");
    }
  }

  // headder__icon: scroll down
  const scrollButton = $( ".header__icon" );

  scrollButton.click( function(event) {
    // if has hash, prevent default and scroll
    if (this.hash !== "") {
      // Prevent default event
      event.preventDefault();

      var hash = this.hash;
      var deviceWidth = $( window ).width();

      if ( deviceWidth < 992 ) {
        $( "html, body" ).animate({
          scrollTop: $(hash).offset().top - 35
        }, 800);
      } else {
        $( "html, body" ).animate({
          scrollTop: $(hash).offset().top - 90
        }, 800);
      }
    }
  });

})
