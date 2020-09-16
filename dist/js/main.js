"use strict";

window.addEventListener("DOMContentLoaded", () => {
    const subMenu = document.querySelector(".header__submenu");
    const icoUser = document.querySelector(".header__right-part_user");

    icoUser.addEventListener("click", () => {
        menu.classList.remove("active");
        subMenu.classList.toggle("active");
    });
    document.addEventListener('keydown', (e)=>{
        if (e.code == 'Escape') {
            subMenu.classList.remove("active");
        }
    });

    const hamburger = document.querySelector(".header__hamburger");
    const menu = document.querySelector(".header__menu");

    hamburger.addEventListener('click', ()=>{
        menu.classList.toggle('active');
        subMenu.classList.remove("active");
    })
});
