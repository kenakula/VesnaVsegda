$(document).ready(function () {
  const ESC_KEY = "Escape";

  const modal = $(".modal");
  const orderButton = $(".order-button");
  const closeButton = $(".modal__close");

  const showModal = function (event) {
    event.preventDefault();
    modal.fadeIn("slow");
    $(document).on("keydown", onEscCloseModal);
  };

  const closeModal = function () {
    event.preventDefault();
    modal.fadeOut("slow");
  };

  const onEscCloseModal = function (event) {
    if (event.key === ESC_KEY) {
      closeModal();
      $(document).off("keydown", onEscCloseModal);
    }
  };

  const onOverlayClickCloseModal = function (evt) {
    evt.target.classList.contains('modal') ? closeModal() : evt.preventDefault();
  };

  orderButton.on("click", showModal);
  closeButton.on("click", closeModal);
  modal.on("click", onOverlayClickCloseModal);

})
