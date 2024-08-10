/////////////// Supermarket slide animation

document.addEventListener("DOMContentLoaded", function () {
  const supermarket = document.querySelector(".modal__supermarket");
  const divider = document.querySelector(".modal__supermarket__divider");
  const description = document.querySelector(
    ".modal__supermarket__description"
  );
  const image = document.querySelector(".modal__supermarket__image");
  const title = supermarket.querySelector(".modal__supermarket__title");

  const updateModalWidth = () => {
    const titleWidth = title.offsetWidth;
    const descriptionWidth = description.offsetWidth;
    const dividerWidth = divider.offsetWidth;
    const imageWidth = image.offsetWidth;

    if (window.scrollY >= image.getBoundingClientRect().bottom) {
      divider.classList.add("slide-in");
      description.classList.add("slide-in");

      supermarket.style.width = `${
        titleWidth + descriptionWidth + dividerWidth + imageWidth + 28
      }px`;
    } else {
      divider.classList.remove("slide-in");
      description.classList.remove("slide-in");

      supermarket.style.width = `${titleWidth + imageWidth + 16}px`; //
    }
  };

  window.addEventListener("scroll", updateModalWidth);

  updateModalWidth();
});


/////////////// Hide overflow when opening supermarket modal

document.addEventListener("DOMContentLoaded", () => {
  const toggleRadio1 = document.getElementById("modal__supermarket__open-button");
  const toggleRadio2 = document.getElementById("modal__supermarket__close-button");
  const transitionDiv = document.querySelector(".modal__supermarket__open-button");
  function handleOverflow() {
    if (toggleRadio1.checked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }

  toggleRadio1.addEventListener("change", handleOverflow);
  toggleRadio2.addEventListener("change", handleOverflow);

  handleOverflow();
});
