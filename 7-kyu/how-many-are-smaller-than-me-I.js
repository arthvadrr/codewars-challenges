/*
https://www.codewars.com/kata/56a1c074f87bc2201200002e/train/javascript

Write a function that given, an array arr, returns an array containing at each index i the amount of numbers that are smaller than arr[i] to the right.

For example:

* Input [5, 4, 3, 2, 1] => Output [4, 3, 2, 1, 0]
* Input [1, 2, 0] => Output [1, 1, 0]

If you've completed this one and you feel like testing your performance tuning of this same kata, head over to the much tougher version How many are smaller than me II?
*/

function smaller(arr) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
   let count = 0;
   for (let c = i + 1; c < arr.length; c++) if (arr[i] > arr[c]) count++  
   result.push(count);
  }

  return result;
}