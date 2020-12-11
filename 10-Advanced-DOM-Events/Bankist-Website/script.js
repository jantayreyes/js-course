'use strict';


////////////////////////////////////////////////////////////////////////

// Selection 
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnSrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');
const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
const dotContainer =  document.querySelector('.dots');
////////////////////////////////////////////////////////////////////////

// MODAL WINDOW
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

// BUTTON SCROLLING
btnSrollTo.addEventListener('click', function (e) {
  const s1Coords =  section1.getBoundingClientRect();
  console.log(s1Coords);

  console.log(e.target.getBoundingClientRect());
  console.log('Current scroll(X/Y)', window.pageXOffset, window.pageYOffset);

  console.log('height/width viewport', 
  document.documentElement.clientHeight, 
  document.documentElement.clientWidth);

  // SCROLLING PAGE
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

// TABBED COMPONENT
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

// MENU FADE ANIMATION
const handleHover = function (e) {
  console.log(this, e.currentTarget);
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if(el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};


// Passing 'argument' into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));


// nav.addEventListener('mouseover', function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1)
// });


// nav.addEventListener('mouseover', function(e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if(el !== link) el.style.opacity = 0.5;
//     });
//     logo.style.opacity = 0.5;
//   }
// });

// nav.addEventListener('mouseout', function(e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');
//     siblings.forEach(el => {
//       if(el !== link) el.style.opacity = 1;
//     });
//     logo.style.opacity = 1;
//   }
// });


// STICKY NAVIGATION
// const initialCoords = section1.getBoundingClientRect();
// console.log(initialCoords);
// window.addEventListener('scroll', function () {
//   console.log(window.scrollY);
//   if (window.scrollY > initialCoords.top) nav.classList.add('sticky');
//   else nav.classList.remove('sticky');
// });

// Sticky navigation: Intersection Observer API
// const obsCallBack = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   root: null,
//   threshold: [0, 0.2]
// };

// const observer = new IntersectionObserver(obsCallBack, obsOptions);
// observer.observe(section1);

const header =  document.querySelector('.header');
const navHeight = nav.getBoundingClientRect();
console.log(navHeight);

const stickyNav = function(entries) {
  const[entry] = entries // same that entries[0]

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight.height}px` //box of 90px that will be applied outside of our target element.
});

headerObserver.observe(header);

// REVEALING SECTIONS
const allSections = document.querySelectorAll('.section')

const reevealSection =  function(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target)
};

const sectionObserver = new IntersectionObserver(reevealSection, {
  root: null,
  threshold: 0.15
});

allSections.forEach(function(section) {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// LAZY LOADING IMAGES
const imgTarget = document.querySelectorAll('img[data-src]');
console.log(imgTarget);

const loadImg = function(entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;
  
  // Replace src with data-src
  entry.target.src =  entry.target.dataset.src;

  // Remove blur filter

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });

  observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  // rootMargin: '200px',
});

imgTarget.forEach(img => imgObserver.observe(img));

// SLIDER COMPONENT
const sliderComponent = function () {

  // Funtions
  let curSlide = 0;
  const maxSlide = slides.length

  // Just for development -- Better overview
  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.3)' 
  // slider.style.overflow = 'visible'

  // slides.forEach((s, i) => s.style.transform = `translateX(${100 * i}%)`)
  // We  multiply 100 * current index and move the slides from the right to the left. This happen because the slides moves 0%, 100%, 200% ...

  const createDots = function() {
    slides.forEach(function(_, i) {
      dotContainer.insertAdjacentHTML(
        'beforeend', 
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  const activateDot = function(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList
      .remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`).classList
      .add('dots__dot--active');
  };

  const goToSlide = function(slide) {
    slides.forEach((s, i) => s.style.transform = `translateX(${100 * (i - slide)}%)`)
  };


  // Next slide
  const nextSlide = function() {
    if (curSlide === maxSlide - 1) curSlide = 0;
    else curSlide++;
    
    goToSlide(curSlide);
    activateDot(curSlide);
  
  };

  // Prev slide
  const prevSlide = function() {
    if (curSlide === 0) curSlide = maxSlide - 1;
    else curSlide--;

    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function() {
    goToSlide(0);
    createDots();
    activateDot(0);
  };
  init();

  // Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Keyboard event 
  document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') prevSlide();
    if(e.key === 'ArrowRight') nextSlide();
    // e.key === 'ArrowRight' && nextSlide(); Short Circuiting
  });

  dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dots__dot')) {
      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    };
  });
};

sliderComponent();