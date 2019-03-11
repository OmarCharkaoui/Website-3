jQuery(document).ready(function($) {

/* add class fixed header when scroling */
$(window).scroll(function() {
    if ($(this).scrollTop() > 80)
    {
        $('.header').addClass('header-fixed');
        $('.back-top').fadeIn('slow');
    }
    else {
        $('.header').removeClass('header-fixed');
        $('.back-top').fadeOut('slow');
    }


});
/* Navbar active links */
/* $('.navbar-navigation li a').click(function(){
$var = $('.navbar-navigation-mobile li a');
$(this).addClass('active-link').parent().siblings().children().removeClass('active-link');
 

});
 */

/* if you reload the website the header don't pick the style until you scroll */
/* This Code fix that  */
if ($(this).scrollTop() > 80) {
    $('.header').addClass('header-fixed');
    $('.back-top').fadeIn('slow'); 
  }
/*  toggle navbar reponsive */
$('.toggle').on('click',function () { 
    $('.nav-mobile').fadeIn(600);
});
$('.CloseIcon , .navbar-navigation-mobile li a').on('click',function(){
    $('.nav-mobile').hide(600);
});
/*  $('.nav-mobile').trigger('click'); need to understing trigger */ 

/* Back to TOP */
$('.back-top').click(function(){
    $('html,body').animate(
        {scrollTop: 0},
        1500,
       'easeInCubic');
});
/* init wow.js */
new WOW().init();

/* magnific-popup*/
$('.view').magnificPopup({
 
    type:'image',
    gallery:{enabled:true},
    mainClass: 'mfp-fade',
    zoom: {
        enabled: true,  
        duration: 300, 
        easing: 'ease-in-out', 
      }
});
/* Smooth scroling snipet code https://css-tricks.com/snippets/jquery/smooth-scrolling/ */
// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});