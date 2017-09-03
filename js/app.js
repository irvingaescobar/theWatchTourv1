

// http://www.jacklmoore.com/colorbox/

$('.js-slideshow-fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  arrows: false,
});

$('.js-headerslide').slick({
infinite: true,
fade: true,
autoplaySpeed: 3000,
pauseOnHover: false,
autoplay: false,
draggable: true,
cssEase: 'linear'
})


let hasClockScrolled = false;
const onClockScrolled = (e) => {
    if (!hasClockScrolled) {
      $('.js-clock-wrapper').fadeOut(2500, function() {
        $('.myPage-navbar').css({
          position: 'fixed',
          width: '100%',
          zIndex: 999999999,
          bottom: 'initial',
          top: '0'
        })
      });
    }
    hasClockScrolled = true;
    const winScrollTop = $(window).scrollTop();

    if (winScrollTop >= $('#signup-page').offset().top && winScrollTop <= $('#signup-page').offset().top + $('#signup-page').outerHeight() ) {
      console.log('signup')
      // window.location.hash = '#signup-page';
      $('.nav-item a.active').removeClass('active')
      $('a[href="#signup-page"]').addClass('active')
      return;
    }
    
    if (winScrollTop >= $('#active-tour').offset().top && winScrollTop <= $('#active-tour').offset().top + $('#active-tour').outerHeight() ) {
      console.log('active')
      // window.location.hash = '#active-tour';
      $('.nav-item a.active').removeClass('active')
      $('a[href="#active-tour"]').addClass('active');
      return;
    }
    
    if (winScrollTop >= $('#discover-page').offset().top && winScrollTop <= $('#discover-page').offset().top + $('#discover-page').outerHeight() ) {
      console.log('Discover')
      // window.location.hash = '#discover-page';
      $('.nav-item a.active').removeClass('active')
      $('a[href="#discover-page"]').addClass('active');
      // console.log()
      return;
    }
    
    if (winScrollTop >= $('#about-page').offset().top && winScrollTop <= $('#about-page').offset().top + $('#about-page').outerHeight() ) {
      console.log('about')
      // window.location.hash = '#about-page';
      $('.nav-item a.active').removeClass('active');
      $('.nav-item a.active').removeClass('active')
      $('a[href="#about-page"]').addClass('active');
      return;
    }
    
}


$(window).on('scroll', onClockScrolled);


/* Discover Watches Slideshow */
$('.js-slideshow').slick({
  slidesToScroll: 1,
  autoplay: false,	
  autoplaySpeed: 3000,
  arrows:false,
  centerMode: true,
  centerPadding: '20px',
  slidesToShow: 1,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '20px',
        slidesToShow: 1
      }
    }
  ]
});


$(document).ready(function() {
  // Test for placeholder support
    $.support.placeholder = (function(){
        var i = document.createElement('input');
        return 'placeholder' in i;
    })();

    // Hide labels by default if placeholders are supported
    if($.support.placeholder) {
        $('.form-label').each(function(){
            $(this).addClass('js-hide-label');
        });  

        // Code for adding/removing classes here
        $('.form-group').find('input, textarea').on('keyup blur focus', function(e){
            
            // Cache our selectors
            var $this = $(this),
                $parent = $this.parent().find("label");

            if (e.type == 'keyup') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label'); 
                } else {
                    $parent.removeClass('js-hide-label');   
                }                     
            } 
            else if (e.type == 'blur') {
                if( $this.val() == '' ) {
                    $parent.addClass('js-hide-label');
                } 
                else {
                    $parent.removeClass('js-hide-label').addClass('js-unhighlight-label');
                }
            } 
            else if (e.type == 'focus') {
                if( $this.val() !== '' ) {
                    $parent.removeClass('js-unhighlight-label');
                }
            }
        });
    } 
});
