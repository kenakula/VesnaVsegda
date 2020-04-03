$(document).ready(function () {
  const CENTER_POSITION = {
    top: "5px",
    width: "25px",
  }

  const TOP_POSITION = {
    top: "0",
    width: "100%",
  }

  const BOT_POSITION = {
    top: "10px",
    width: "100%",
  }

  const menu = $(".main-nav__list");
  const menuToggler = $(".main-nav__toggler");
  const togglerTop = $(".main-nav__toggler--top");
  const togglerBot = $(".main-nav__toggler--bot");

  const toggleRotatedClass = (elem1, elem2) => {
    window.setTimeout(() => {
      elem1.toggleClass("rotated");
      elem2.toggleClass("rotated");
    }, 300)
  };

  const animateTogglerToCenter = (elem1, elem2) => {
    elem1.animate(CENTER_POSITION, 400);
    elem2.animate(CENTER_POSITION, 400);
  };

  const animateTogglerToInitial = (elem1, elem2) => {
    elem1.animate(TOP_POSITION, 400);
    elem2.animate(BOT_POSITION, 400);
  };

  const showMenu = () => {
    menu.slideDown("slow");
    menu.addClass("main-nav__list--active");
    menuToggler.addClass("main-nav__toggler--active");
    animateTogglerToCenter(togglerTop, togglerBot);
    toggleRotatedClass(togglerTop, togglerBot);
  };

  const hideMenu = () => {
    menu.slideUp("slow");
    menu.removeClass("main-nav__list--active");
    menuToggler.removeClass("main-nav__toggler--active");
    animateTogglerToInitial(togglerTop, togglerBot);
    toggleRotatedClass(togglerTop, togglerBot);
  };

  const onTogglerClickToggleMenu = () => {
    if (!menu.hasClass("main-nav__list--active")) {
      showMenu();
    } else {
      hideMenu();
    }
  };

  menu.hide();
  menuToggler.click(onTogglerClickToggleMenu);
});
