'use strict';

$(document).ready(() => {
  const slideButton = $('.promo__arrow');
  const mouseButton = $('.promo__mouse');
  const promoButton = $('.promo__inner > .button');
  const catalogAnchor = $('#catalog');


  const slideToAnchor = function (evt, anchor) {
    let anchorPosition = anchor.offset().top;
    evt.preventDefault();

    $('html, body').animate({
      scrollTop: anchorPosition,
    }, 1000);

  };

  slideButton.click(function (evt) {
    slideToAnchor(evt, catalogAnchor);
  });

  mouseButton.click(function (evt) {
    slideToAnchor(evt, catalogAnchor);
  });

  promoButton.click(function (evt) {
    slideToAnchor(evt, catalogAnchor);
  });

});
