
// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/**
 Given an array of forecasted maximum
 temperatures, the thermometer displays a
string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
days ... 21ºC in 2 days ... 23ºC in 3 days ..."
Your tasks:
1. Create a function 'printForecast' which takes in an array 'arr' and logs a
string like the above to the console. Try it with both test datasets.
2. Use the problem-solving framework: Understand the problem and break it up
into sub-problems!
Test data:
§ Data 1: [17, 21, 23]
§ Data 2: [12, 5, -5, 0, 4]
GOOD LUCK �
 */

 // 1) Understanding the problem
 // - Array transformed to string, separated by ...
 // - What is the X days? Answer: index + 1

 // 2) Breaking up into sub-problems
 // - Transform array into string
 // - Transform each elment to string with ºC
 // - String needs to contais dat (index + 1)
 // - Add ... between elements and start end of string

const dataOne = [17, 21, 23];
const dataTwo = [12, 5, -5, 0, 4];

const printForecast =  function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += ` ... ${arr[i]}ºC in ${i + 1} days`
  }
  console.log(str);
}
printForecast(dataOne);
printForecast(dataTwo);