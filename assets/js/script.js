// JS pour toggle menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const closeMenu = document.querySelector(".close-menu");
    const body = document.body;
  
    menuToggle.addEventListener("click", () => {
      navMenu.classList.add("is-active");
      body.classList.add("menu-open");
    });
  
    closeMenu.addEventListener("click", () => {
      navMenu.classList.remove("is-active");
      body.classList.remove("menu-open");
    });
  });