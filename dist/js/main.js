"use strict";

window.addEventListener("DOMContentLoaded", () => {
    //? MENU
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

    //? PROMO__slider
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
    next.addEventListener("click", () => {
        plusSlides(1);
    });

    //? POPULAR-LOTS__SLIDER

    const lotSlides = document.querySelectorAll(".popular-lots__lot");
    const lotSliderWrap = document.querySelector(".popular-lots__wrapper");
    const lotNext = document.querySelector(".all-lots__dec_right");
    const lotPrev = document.querySelector(".all-lots__dec_left");

    let lotPos = 0;
    let lotIndex = 1;
    let lotShow = Math.floor(
        parseInt(getComputedStyle(lotSliderWrap).width) / parseInt(getComputedStyle(lotSlides[0]).width)
    );
    const sliderStep =
        parseInt(getComputedStyle(lotSlides[1]).width) +
        parseInt(getComputedStyle(lotSlides[1]).marginLeft) +
        parseInt(getComputedStyle(lotSlides[1]).marginRight);
    lotIndex = lotShow;
    console.log(sliderStep);
    lotNext.addEventListener("click", () => {
        if (lotIndex < lotSlides.length) {
            lotPos -= sliderStep;
            lotSliderWrap.style.transform = `translateX(${lotPos}px)`;
            lotIndex += 1;
        } else {
            lotPos = 0;
            lotSliderWrap.style.transform = `translateX(${lotPos}px)`;
            lotIndex = lotShow;
        }
    });

    lotPrev.addEventListener("click", () => {
        if (lotIndex > lotShow) {
            lotPos += sliderStep;
            lotSliderWrap.style.transform = `translateX(${lotPos}px)`;
            lotIndex -= 1;
        } else {
            lotPos = -sliderStep * (lotSlides.length - lotShow);
            lotSliderWrap.style.transform = `translateX(${lotPos}px)`;
            lotIndex = lotSlides.length;
        }
    });
});
