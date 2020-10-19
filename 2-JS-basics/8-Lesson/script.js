// Truthy and False values

// FALSY VALUES: undefined, null, 0, '', NaN
// TRUTHY VALUES: NOT falsy values

var height; //I'm using var, because const I return me an error: 'Missing initializer in const declaration. 

height = 23;

if (height || height === 0) {
  console.log('Variable is defined');
} else {
  console.log('Variable has Not been defined');
}

// Equality operators 

if (height == '23') {
  console.log('The == operator does type coercion');
} else  {
  console.log('Variable has Not been defined');
}