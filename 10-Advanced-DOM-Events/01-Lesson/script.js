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

