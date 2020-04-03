$(document).ready(() => {
  const slideButton = $(".promo__arrow");
  const mouseButton = $(".promo__mouse");
  const promoButton = $(".promo__link");
  const catalogAnchor = $("#catalog");

  
  const slideToAnchor = (evt, anchor) => {
    let anchorPosition = anchor.offset().top;

    $("html, body").animate({
      scrollTop: anchorPosition,
    }, 1000);

    evt.preventDefault();
  };

  slideButton.click((evt) => {
    slideToAnchor(evt, catalogAnchor);
  });
  
  mouseButton.click((evt) => {
    slideToAnchor(evt, catalogAnchor);
  });

  promoButton.click((evt) => {
    slideToAnchor(evt, catalogAnchor);
  });

})