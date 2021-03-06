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
    const promoSliderWrap = document.querySelector(".promo__slider");

    next.addEventListener("click", () => {
        let lotIndex = calcCurrentIndex(promoSliderWrap, slides);
        if (lotIndex < slides.length) {
            nextSlide(promoSliderWrap, slides);
        } else {
            refreshSliderStart(promoSliderWrap);
        }
    });

    prev.addEventListener("click", () => {
        let lotIndex = calcCurrentIndex(promoSliderWrap, slides);
        if (lotIndex > calcSliderCurrentShow(promoSliderWrap, slides)) {
            prevSlide(promoSliderWrap, slides);
        } else {
            refreshSliderEnd(promoSliderWrap, slides);
        }
    });

    //? POPULAR-LOTS__SLIDER

    const lotSlides = document.querySelectorAll(".popular-lots__lot");
    const lotSliderWrap = document.querySelector(".popular-lots__wrapper");
    const lotNext = document.querySelector(".all-lots__dec_right");
    const lotPrev = document.querySelector(".all-lots__dec_left");
    /* let lotIndex = calcSliderCurrentShow(lotSliderWrap, lotSlides); */

    lotNext.addEventListener("click", () => {
        let lotIndex = calcCurrentIndex(lotSliderWrap, lotSlides);
        if (lotIndex < lotSlides.length) {
            nextSlide(lotSliderWrap, lotSlides);
        } else {
            refreshSliderStart(lotSliderWrap);
        }
    });

    lotPrev.addEventListener("click", () => {
        let lotIndex = calcCurrentIndex(lotSliderWrap, lotSlides);
        if (lotIndex > calcSliderCurrentShow(lotSliderWrap, lotSlides)) {
            prevSlide(lotSliderWrap, lotSlides);
        } else {
            refreshSliderEnd(lotSliderWrap, lotSlides);
        }
    });
    // считаем сколько будет пролистываться при нажатии на кнопку
    function calcSliderStep(sliderItems) {
        return (
            parseInt(getComputedStyle(sliderItems[1]).width) +
            parseInt(getComputedStyle(sliderItems[1]).marginLeft) +
            parseInt(getComputedStyle(sliderItems[1]).marginRight)
        );
    }

    //считаем сколько слайдов влезает в окно
    function calcSliderCurrentShow(sliderWrap, sliderItems) {
        return Math.floor(
            parseInt(getComputedStyle(sliderWrap).width) / parseInt(getComputedStyle(sliderItems[0]).width)
        );
    }

    // нажатие на кнопку NEXT
    function nextSlide(sliderWrap, sliderItems) {
        let itemPos = parseInt(getComputedStyle(sliderWrap).left);
        itemPos -= calcSliderStep(sliderItems);
        sliderWrap.style.left = `${itemPos}px`;
    }
    // нажатие на кнопку PREV
    function prevSlide(sliderWrap, sliderItems) {
        let itemPos = parseInt(getComputedStyle(sliderWrap).left);
        itemPos += calcSliderStep(sliderItems);
        sliderWrap.style.left = `${itemPos}px`;
    }

    function refreshSliderStart(sliderWrap) {
        sliderWrap.style.left = `0px`;
    }

    function refreshSliderEnd(sliderWrap, sliderItems) {
        let lotPos =
            -calcSliderStep(sliderItems) * (sliderItems.length - calcSliderCurrentShow(sliderWrap, sliderItems));
        sliderWrap.style.left = `${lotPos}px`;
    }

    function calcCurrentIndex(sliderWrap, sliderItems) {
        return (
            Math.abs(parseInt(getComputedStyle(sliderWrap).left)) / calcSliderStep(sliderItems) +
            calcSliderCurrentShow(sliderWrap, sliderItems)
        );
    }

    //?QUOTE SLIDER

    const quoteSliderWrap = document.querySelector(".slider-quote__items");
    const quoteSlides = document.querySelectorAll(".slider-quote__item");
    const quoteBtnNext = document.querySelector(".slider-quote__arrow_right");
    const quoteBtnPrev = document.querySelector(".slider-quote__arrow");
    const quoteBtnRefresh = document.querySelector(".slider-quote__refresh");

    quoteBtnNext.addEventListener("click", () => {
        let index = calcCurrentIndex(quoteSliderWrap, quoteSlides);
        if (index < quoteSlides.length) {
            nextSlide(quoteSliderWrap, quoteSlides);
        } else {
            refreshSliderStart(quoteSliderWrap);
        }
    });

    quoteBtnPrev.addEventListener("click", () => {
        let index = calcCurrentIndex(quoteSliderWrap, quoteSlides);
        if (index > calcSliderCurrentShow(quoteSliderWrap, quoteSlides)) {
            prevSlide(quoteSliderWrap, quoteSlides);
        } else {
            refreshSliderEnd(quoteSliderWrap, quoteSlides);
        }
    });

    quoteBtnRefresh.addEventListener("click", () => {
        refreshSliderStart(quoteSliderWrap);
    });
});
