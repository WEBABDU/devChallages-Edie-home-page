const hamburgerMenuBtn = document.querySelector(".hamburger-menu");
const navList = document.querySelector(".nav__list");

hamburgerMenuBtn.addEventListener("click", () => {
  navList.hasAttribute("data-visible")
    ? hamburgerMenuBtn.setAttribute("aria-expanded", false)
    : hamburgerMenuBtn.setAttribute("aria-expanded", true);

  navList.toggleAttribute("data-visible");
});
