/////////////// Hide overflow when hovering on dropdown menu

document.addEventListener("DOMContentLoaded", () => {
  const hoverNavCategories = document.querySelector(".nav__categories");

  hoverNavCategories.addEventListener("mouseover", () => {
    document.documentElement.style.overflow = "hidden";
  });

  hoverNavCategories.addEventListener("mouseout", () => {
    document.documentElement.style.overflow = "auto";
  });
});

/////////////// Search unfocus on dropdown hover

document.addEventListener("DOMContentLoaded", () => {
  const navCategories = document.querySelector(".nav__categories");
  const focusableDiv = document.querySelector(".search");
  const searchInput = document.querySelector(".search-input");
  const searchActive = document.getElementById("search__active");

  navCategories.addEventListener("mouseover", () => {
    if (focusableDiv) focusableDiv.blur();
    if (searchInput) searchInput.blur();
    if (searchActive) searchActive.style.display = "none";
  });
});

/////////////// Hide overflow when focusing on search bar

document.addEventListener("DOMContentLoaded", () => {
  const focusableDiv = document.querySelector(".search");
  const searchInput = document.querySelector(".search-input");

  const addFocus = () => {
    if (focusableDiv) focusableDiv.classList.add("focused");
    document.documentElement.style.overflow = "hidden";
  };
  const removeFocus = () => {
    if (focusableDiv) focusableDiv.classList.remove("focused");
    document.documentElement.style.overflow = "";
  };

  if (focusableDiv) {
    focusableDiv.addEventListener("focus", addFocus);
    focusableDiv.addEventListener("blur", removeFocus);
  }

  if (searchInput) {
    searchInput.addEventListener("focus", addFocus);
    searchInput.addEventListener("blur", removeFocus);
  }
});

/////////////// Hide sub navbar on scroll

document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("sub__navbar");
  let lastScrollY = window.scrollY;
  const threshold = 100;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY && currentScrollY > threshold) {
      header.classList.add("header__hidden");
    } else if (currentScrollY < lastScrollY) {
      header.classList.remove("header__hidden");
    }
    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", () => {
    requestAnimationFrame(handleScroll);
  });
});