const navbar = document.getElementById("navbar"),
  toggleBtn = document.querySelector(".navbar_toggle i");

function navbarFun() {
  if (navbar) {
    navbar.classList.toggle("show_navbar");
  }
  if (navbar.classList.contains("show_navbar")) {
    toggleBtn.classList.remove("bx-menu");
    toggleBtn.classList.add("bx-x");
  } else {
    toggleBtn.classList.add("bx-menu");
    toggleBtn.classList.remove("bx-x");
  }
}

const scrollBtn = document.querySelector(".scrollBtn");

function scrollTopFun() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showScrollBtn() {
  const scrollTop = window.scrollY;
  if (scrollTop > 100) {
    scrollBtn.classList.add("show_btn");
  } else {
    scrollBtn.classList.remove("show_btn");
  }
}

window.addEventListener("load", showScrollBtn);
window.addEventListener("scroll", showScrollBtn);
