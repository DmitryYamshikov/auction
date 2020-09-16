"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const subMenu = document.querySelector(".header__submenu");
    const icoUser = document.querySelector(".header__right-part_user");

    icoUser.addEventListener("click", () => {
        menu.classList.remove("active");
        subMenu.classList.toggle("active");
    });
    document.addEventListener("keydown", (e) => {
        if (e.code == "Escape") {
            subMenu.classList.remove("active");
        }
    });

    const hamburger = document.querySelector(".header__hamburger");
    const menu = document.querySelector(".header__menu");

    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
        subMenu.classList.remove("active");
    });

    //? slider
    const slides = document.querySelectorAll(".promo__slider_item");
    const prev = document.querySelector(".slider-nav__arrow_prev");
    const next = document.querySelector(".slider-nav__arrow_next");

    let slideIndex = 1;

    showSlides(1);

    function showSlides(n) {
        if (n > slides.length) {
            slideIndex = 1;
        }
        if (n < 1) {
            slideIndex = slides.length;
        }
        slides.forEach((item) => (item.style.display = "none"));
        slides[slideIndex - 1].style.display = "";
    }

    function plusSlides(n) {
        showSlides((slideIndex += n));
    }

    prev.addEventListener("click", () => {
        plusSlides(-1);
    });
    next.addEventListener("click", ()=>{
        plusSlides(1);
    });
});
