$(document).ready(function () {
  const menu = $(".main-nav__list");
  const menuToggler = $(".main-nav__toggler");
  const togglerTop = $(".main-nav__toggler--top");
  const togglerBot = $(".main-nav__toggler--bot");

  const addRotatedClass = (elem) => {
    window.setTimeout(() => {
      elem.addClass("rotated");
    }, 300)
  };

  const removeRotatedClass = (elem) => {
    window.setTimeout(() => {
      elem.removeClass("rotated");
    }, 300)
  };

  const animateTogglerToCenter = () => {
    togglerTop.animate({
      top: "5px",
      width: "25px",
    }, 400);
    togglerBot.animate({
      top: "5px",
      width: "25px",
    }, 400);
  };

  const animateTogglerToInitial = () => {
    togglerTop.animate({
      top: "0",
      width: "100%",
    }, 400);
    togglerBot.animate({
      top: "10px",
      width: "100%",
    }, 400);
  };

  const showMenu = () => {
    menu.slideDown("slow");
    menu.addClass("main-nav__list--active");

    menuToggler.addClass("main-nav__toggler--active");
    animateTogglerToCenter();
    addRotatedClass(togglerTop);
    addRotatedClass(togglerBot);
  };

  const hideMenu = () => {
    menu.slideUp("slow");
    menu.removeClass("main-nav__list--active");
    menuToggler.removeClass("main-nav__toggler--active");
    animateTogglerToInitial();
    removeRotatedClass(togglerTop);
    removeRotatedClass(togglerBot);
  };

  menuToggler.click(function () {
    if (!menu.hasClass("main-nav__list--active")) {
      showMenu();
    } else {
      hideMenu();
    }
  });

  menu.hide();

});
