$(document).ready(function () {
  const sliderList = $(".slider__list");
  const slides = $(".slider__item");
  const bulletsContainer = $(".slider__controls");
  const bullets = $(".slider__bullet");

  const onBulletClickChangeSlide = function (event) {
    let newSlideIndex = $(event.target).data("slide");
    let slideWidth = slides.eq(newSlideIndex).width();

    changeSlide(newSlideIndex, slideWidth);
  }

  const changeSlide = function (index, slideWidth) {
    sliderList.animate({
      left: -slideWidth * index
    }, 1200);
  };

  const onBulletClickChangeActiveBullet = function (event) {
    let currentActiveBullet = bulletsContainer.find(".slider__bullet--active");
    currentActiveBullet.removeClass("slider__bullet--active");
    $(event.target).addClass("slider__bullet--active");
  };

  bullets.click(onBulletClickChangeSlide);
  bullets.click(onBulletClickChangeActiveBullet);

});
