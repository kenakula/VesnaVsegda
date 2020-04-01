$(document).ready(function () {
  const menu = $(".main-nav__list");
  const menuToggler = $(".main-nav__toggler");
  const pageLogo = $(".page-header__logo");

  const showMenu = () => {
    menu.slideDown("slow");
    menu.addClass("main-nav__list--active");
    pageLogo.animate({
      left: "+=85px"
    }, "slow");
    menuToggler.addClass("main-nav__toggler--active");
  };

  const hideMenu = () => {
    menu.slideUp("slow");
    menu.removeClass("main-nav__list--active");
    pageLogo.animate({
      left: "-=85px"
    }, "slow");
    menuToggler.removeClass("main-nav__toggler--active");
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
