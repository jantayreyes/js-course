// ONLY WORKS IN BANKIST FOLDER

// Selecting Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);  

const header = document.querySelector('.header');
const allSection = document.querySelectorAll('.section');
console.log(allSection); // Nodelist

document.getElementById('section--1');
const allButtons = document.getElementsByTagName('button');
console.log(allButtons); // HTML Collection

const btn = document.getElementsByClassName('btn');
console.log(btn); // HTML Collection

// Creating and inserting Elements
// insertAdjacentHTML

const message = document.createElement('div'); // create DOM element
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics';
message.innerHTML = 
   'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// header.prepend(message);
header.append(message);
// header.append(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete Elements
document.querySelector('.btn--close-cookie').addEventListener('click', function() {
 // message.remove();
 message.parentElement.removeChild(message); // Old Way
});

// Styles 
message.style.backgroundColor = '#37383d' // Inline Styles
message.style.width = '120%';  // Inline Styles

console.log(message.style.height); // does not work
console.log(message.style.backgroundColor); // Only works for inline styles, styles that we manually added.

console.log(getComputedStyle(message).color); // style.css propertie
console.log(getComputedStyle(message).height);// style.css propertie 

message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px'; // You have to parse because the result of "getComputedStyle(message).height" is a string.

document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes
// Standard
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.alt);
console.log(logo.className);

logo.alt = 'Beautiful minimalist logo'; // adding standard -properties

// Non-Standard
console.log(logo.designer); // It only works for stantard properties.
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist')

// ------------------------
console.log(logo.src); // absolute path
console.log(logo.getAttribute('src')); // relative path

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes
console.log(logo.dataset.versionNumber);

// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); // not includes

// DO NOT USE - because it overrides all the existing classes
logo.className = 'jonas'

// Handling events and removing them
const h1 =  document.querySelector('h1');
const alertH1 =  function (e) {
  alert('addEventListener: Great! You are reading the heading');  
};

h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);

// h1.onmouseenter = function (e) {
//   alert('onmouseenter: Great! You are reading the heading');
// };

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

// DOM Traversing
const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children); // only for direct children
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('header').style.background = 'var(--gradient-secondary)';
h1.closest('h1').style.background = 'var(--gradient-primary)';
 
// slosests find parents elements no matter how far is in the dom tree.
// querySelector find childrens elements no matter how far is in the dom tree.

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);

console.log(h1.previousSibling);
console.log(h1.nextSibling);

// IF for some reason we need all the siblings, we can go first for the parent element and read all the children elements. iT IS LIKE A TRICK.
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function(el) {
  if(el !== h1) el.style.transform = 'scale(0.5)'
});