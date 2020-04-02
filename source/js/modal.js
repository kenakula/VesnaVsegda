$(document).ready(function () {
  const ESC_KEY = "Escape";

  const modal = $(".modal");
  const orderButton = $(".order-button");
  const closeButton = $(".modal__close");

  const showModal = (event) => {
    event.preventDefault();
    modal.fadeIn("slow");
    $(document).on("keydown", onEscCloseModal);
  };

  const closeModal = () => {
    event.preventDefault();
    modal.fadeOut("slow");
  };

  const onEscCloseModal = (event) => {
    if (event.key === ESC_KEY) {
      closeModal();
      $(document).off("keydown", onEscCloseModal);
    }
  };

  orderButton.on("click", showModal);
  closeButton.on("click", closeModal);

})
