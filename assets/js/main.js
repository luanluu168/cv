/**
* Template Name: MyResume - v2.2.1
* Template URL: https://bootstrapmade.com/free-html-bootstrap-template-my-resume/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  // Intro typed
  if ($('.typed').length) {
    console.log(`If typed is called`);
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, #mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 300;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 200) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });
  jQuery(document).ready(function($) {
    $('.counter').counterUp({
        delay: 10,
        time: 3000
    });
  });
  

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item'
    });

    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $('.venobox').venobox({
      'share': false
    });

    // Initiate aos_init() function
    aos_init();

  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Dev intro text
  $(window).scroll(function() {
    if ($(this).scrollTop() <= 5) {
      $('#dev-intro-text').toggleClass('spinner');
    }
  });

  const SCREEN_WIDTH = window.innerWidth;
  $(document).ready(function() {
    var
          carousel = document.querySelector('.carousel'),
             cells = carousel.querySelectorAll('.carousel__cell'),
         cellCount = carousel.childElementCount,
     selectedIndex = 0,
         cellWidth = carousel.offsetWidth,
          rotateFn = 'rotateY',
     radius, theta = 360 / cellCount,
        prevButton = document.querySelector('.previous-button'),
        nextButton = document.querySelector('.next-button');

    function rotateCarousel(carousel, theta, selectedIndex) {
      var angle = -theta * selectedIndex;
      carousel.style.transform = 'translateZ(' + -radius + 'px) ' + 
                                  rotateFn + '(' + angle + 'deg)';
    }
    function handleNextButtonIsClicked(e) {
        e.stopPropagation(); // prevent spin more than needed
        selectedIndex = (selectedIndex + 1) % cellCount;
        rotateCarousel(carousel, theta, selectedIndex);
    }
    function handlePreviousButtonIsClicked(e) {
        e.stopPropagation(); // prevent spin more than needed
        selectedIndex = (selectedIndex - 1) % cellCount;
        rotateCarousel(carousel, theta, selectedIndex);
    }
    function handleCarouselCellIsClicked(e) {
        selectedIndex = e.currentTarget.id;
        rotateCarousel(carousel, theta, selectedIndex);
    }

    prevButton.addEventListener( 'click', handlePreviousButtonIsClicked, true);
    nextButton.addEventListener( 'click', handleNextButtonIsClicked, true);

    function initialize() {
      var cellSize = cellWidth;
      radius = Math.round( ( cellSize / 2) / Math.tan( Math.PI / cellCount ) );
      for ( var i=0; i < cells.length; i++ ) {
          var cell = cells[i];
          var cellAngle = theta * i;
          cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)';
          cell.id = i; // set the id for on click event listener to use it later
          cell.addEventListener( 'click', handleCarouselCellIsClicked, true);
      }
    }

    initialize();
    rotateCarousel(carousel, theta, selectedIndex);

    $(window).resize(function(){
      const needRefresh = Math.abs(window.innerWidth - SCREEN_WIDTH) >= 400;
      if(needRefresh) {
        location.reload();
      }
    });
  });

})(jQuery);