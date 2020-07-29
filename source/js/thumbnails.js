$(document).ready(function () {

  const nextButton = '<button type="button" class="slick-prev button thumbnails__button thumbnails__button--next">Next</button>';
  const previousButton = '<button type="button" class="slick-prev button thumbnails__button thumbnails__button--previous">Previous</button>';

  $('.thumbnails__list').slick({
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: false,
    dotsClass: 'thumbnails__dots',
    customPaging: function () {
      return '<span class="thembnails__bullet"></span>';
    },
    prevArrow: previousButton,
    nextArrow: nextButton,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
          arrows: false,
        }
      }
    ]
  })

  $('a[data-rel^=lightcase]').lightcase();

})