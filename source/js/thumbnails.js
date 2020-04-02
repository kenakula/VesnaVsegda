$(document).ready(function () {

  const sliderButton = $(".thumbnails__button");
  const sliderList = $(".thumbnails__list");

  const moveSliderForvard = () => {
    sliderList.animate({
      left: "-552px",
    }, "slow");
  };

  const moveSliderBack = () => {
    sliderList.animate({
      left: "0",
    }, "slow");
  };

  const changeButtonClass = () => {
    sliderButton.toggleClass("thumbnails__button--used");
  };

  const changeListClass = () => {
    sliderList.toggleClass("thumbnails__list--slided");
  };

  const onSliderButtonSlidesChange = () => {

    if (sliderList.hasClass("thumbnails__list--slided")) {
      moveSliderBack();
      changeButtonClass();
      changeListClass();
      return;
    }

    moveSliderForvard();
    changeButtonClass();
    changeListClass();
  }

  sliderButton.click(onSliderButtonSlidesChange);
})