
// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/** 
// PROBLEM  1
// We work for a company building a smart home thermometer. Our most recent task is this: "given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, 2, 6, 1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem.
// - Thwat is temp amplitude? Answer: difference between highest and lowest temp.
// - How to compute max and min temperatures?
// - What's a sensor error? and what to do?

// 2) Breaking up into sub-problems.
// - How to ignore errors?
// - Find max value in temp array.
// - Fin min value in temp array.
// - Substract min from max and return it. 

const calcTemAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for(let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;

    if (currTemp > max) max = currTemp;
    if (currTemp < min) min =  currTemp
  } 
  console.log(max, min);
  return max - min;
};
const amplitude = calcTemAmplitude(temperatures);
console.log(amplitude);

// PROBLEM 2
// Function should now receive 2 arrays of temps

// 1) Undestandigng the problem
// - Witch 2 arrays, should we implement funcionality twice? NO! Just merge 2 arrays.

// 2) Breaking up into sub-problems.
// -  Merge 2 arrays?


const calcTemAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for(let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
      if (currTemp > max) max = currTemp;
      if (currTemp < min) min = currTemp;
  } 
  console.log(max, min);
  return max - min;
};
const amplitudeNew = calcTemAmplitudeNew(temperatures, [50, 5, 3]);
console.log(amplitudeNew);
*/

//Debbugging with the console and breakpoints

const measureKelvin =  function() {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    // C) FIX
    // value: Number(prompt('Degrees celsius:')),
    value: 15
  }
  // b) FIND
  console.table(measurement);
  // console.log(measurement.value);
  // console.warn(measurement.value);
  // console.error(measurement.value);

  const kelvin = measurement.value + 273;
  return kelvin
}

// A) INDENTIFY
console.log(measureKelvin());


// Using a debugger

const calcTemAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0; // We can not start the minumun and maximun as 0.

  for(let i = 0; i < temps.length; i++) {
    const currTemp = temps[i];
    if (typeof currTemp !== 'number') continue;
      // debugger;
      if (currTemp > max) max = currTemp;
      if (currTemp < min) min = currTemp;
  } 
  console.log(max, min);
  return max - min;
};
const amplitudeBug = calcTemAmplitudeBug([3, 15, 22], [50, 5, 3]);
// A) IDENTIFY
console.log(amplitudeBug);