$(document).ready(function(){
//slick slider centre mood
  $('.c_centerone').slick({
    centerMode: true,
    dots: true,
    centerPadding: '60px',
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: true,

/*    responsive: [

      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },

      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }

    ]
 */  

  });


});