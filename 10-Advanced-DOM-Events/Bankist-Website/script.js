'use strict';


////////////////////////////////////////////////////////////////////////

// Selection 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnSrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

////////////////////////////////////////////////////////////////////////

// Modal window
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

////////////////////////////////////////////////////////////////////////

// Button Scrolling
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

// PAGE NAVIGATION

// No efficient because we are creating 3 copys of the same event handler, image having 10.000 elements.
// document.querySelectorAll('.nav__link').forEach(function(el) {
//   el.addEventListener('click', function(e) {
//     e.preventDefault()
//     const id = this.getAttribute('href');
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
//   });
// });

// Event Delegation - Better solution
// 1.  Add event listener to commom parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function(e) {
  e.preventDefault();

  // Matching strategy
  if(e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth'});
  };
});

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function(e) {
  const clicked = e.target.closest('.operations__tab');

  //Guard clause
  if (!clicked) return;

  // Before to add any active tab, we remove all of them, basically clearing. 
  tabs.forEach( t => t.classList.remove('operations__tab--active'));
  clicked.classList.add('operations__tab--active');

 
  // First we have to remove all the areas that were activated.
  tabsContent.forEach( c => c.classList.remove('operations__content--active'));
  
  // Activate content area
  document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
});