'use strict';

// burger-menu

const mobileNavBtn = document.querySelector('.mobile-nav-button');
const mobileNavIcon = document.querySelector('.mobile-nav-button__icon');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

mobileNavBtn.addEventListener('click', clickHandler);

function clickHandler() {
   mobileNavIcon.classList.toggle('active');
   mobileNav.classList.toggle('active');
   body.classList.toggle('no-scroll');
   window.scrollTo(0, 0);
}