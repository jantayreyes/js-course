'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
//////////////////////////////////////////////////////////////////////////////////

const btnSrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnSrollTo.addEventListener('click', function (e) {
  const s1Coords =  section1.getBoundingClientRect();
  console.log(s1Coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', 
  document.documentElement.clientHeight, 
  document.documentElement.clientWidth);

  // Scrolling
  // window.scrollTo(
  // s1Coords.left + window.pageXOffset, //Current position + current scroll
  //   s1Coords.top + window.pageYOffset
  //   );

  // Old way
  // window.scrollTo ({
  //   left: s1Coords.left + window.pageXOffset,
  //   top: s1Coords.top + window.pageYOffset,
  //   behavior: 'smooth',
  // });

  // Modern way
  section1.scrollIntoView({behavior: 'smooth'})
});

// Generate random color rgb(255, 255, 255)
const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

document.querySelector('.nav__link').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor;
  console.log('link', e.target, e.currentTarget)
  console.log(e.currentTarget === this); // the same in any event handler.

  // Stop propagation
  // e.stopPropagation();
});

document.querySelector('.nav__links').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor;
  console.log('container', e.target, e.currentTarget)
});

document.querySelector('.nav').addEventListener('click', function(e) {
  this.style.backgroundColor = randomColor;
  console.log('nav', e.target, e.currentTarget)
});