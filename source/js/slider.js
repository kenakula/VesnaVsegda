'use strict';

$(document).ready(function () {

  $('.slider__list').slick({
    speed: 1000,
    arrows: false,
    dots: true,
    mobileFirst: true,
    dotsClass: 'slider__controls',
    customPaging: function () {
      return '<span class="slider__bullet"></span>';
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },

      {
        breakpoint: 1365,
        settings: 'unslick'
      }
    ]
  });

});
