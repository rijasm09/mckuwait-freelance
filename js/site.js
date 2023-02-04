
$(document).ready(function(){
  $(".nav-item .nav-link").click(function(){
    $(this).toggleClass("main");
    $(".sub-menu").slideToggle();
  });

  // var HeaderHeight = $(".header-section").outerHeight();
  // if (window.matchMedia('(max-width: 992px)').matches) {
  //     $("body").css("padding-top", HeaderHeight);
  //   }


});

$( document ).ready(function() {
   $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        // autoplay: true,
        prevArrow: "<button type='button' class='slick-arrow slick-prev'><i class='icon-arrow-left'></i></button>",
        nextArrow: "<button type='button' class='slick-arrow slick-next'><i class='icon-arrow-right'></i></button>",

        responsive: [
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                dots: true,
              }
            },
          ]
       
      });

      $('.service-slide').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
       
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
       
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
      });


      });

  


     $('.client-slide').slick({
     slidesToShow: 5,
     slidesToScroll: 1,
     verticalScrolling: true,
     vertical: true,
     arrows: false,
     autoplay: true,
     autoplay: true,
     autoplaySpeed: 1000,
     responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        verticalScrolling: false,
     vertical: false,
     arrows: false,
        
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        verticalScrolling: false,
     vertical: false,
     arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        verticalScrolling: false,
     vertical: false,
     arrows: false,
      }
    }
   
  ]
     
     });
    


     $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        arrows: false,
        autoplay: true,
        asNavFor: '.slider-nav'
      });
      $('.slider-nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        loop:false,
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        prevArrow: "<button type='button' class='slick-arrow slick-prev'><i class='icon-arrow-left'></i></button>",
              nextArrow: "<button type='button' class='slick-arrow slick-next'><i class='icon-arrow-right'></i></button>",
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: true,
            }
          },
        
        
        
        ]
      });
          