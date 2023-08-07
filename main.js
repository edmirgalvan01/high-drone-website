const headerDrone = document.getElementById("headerDrone");
const headerMenu = document.getElementById("headerMenu");
const headerMobileMenu = document.getElementById("headerMobileMenu");

let isOpenMenu = false;

addEventListener("scroll", () => {
  if (window.scrollY > 200 && window.screen.width > 600) {
    headerDrone.style.display = "none";
  } else {
    headerDrone.style.display = "block";
  }
});

headerMenu.addEventListener("click", () => {
  if (!isOpenMenu) {
    isOpenMenu = true;
    headerMobileMenu.classList.remove("disabled");
    headerMobileMenu.classList.add("header--mobile-menu");
  } else {
    isOpenMenu = false;
    headerMobileMenu.classList.add("disabled");
    headerMobileMenu.classList.remove("header--mobile-menu");
  }
});
