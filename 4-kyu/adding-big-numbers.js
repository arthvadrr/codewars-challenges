/*
https://www.codewars.com/kata/525f4206b73515bffb000b21/train/javascript

We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.
Example

add("123", "321"); -> "444"
add("11", "99");   -> "110"

Notes
    The input numbers are big.
    The input is a string of only digits
    The numbers are positives
*/

const add = (num1, num2) => {
  const dubees = (arr, i) => parseInt(arr.charAt(i)) % 10;
  const a = num1.length > num2.length ? num1 : num2
  const b = num1.length > num2.length ? num2.padStart(a.length, 0) : num1.padStart(a.length, 0)
  
  let res = ''
  let rem = 0
  
  for (let i = a.length - 1; i > -1; i--) {
    let stored = dubees(a, i) + dubees(b, i) + rem;
    res += stored > 9 ? stored % 10 : stored
    rem  = stored > 9 ? Math.floor(stored / 10) : 0
  }
  
  if (rem > 0) res += rem;
  return res.split('').reverse().join('');
}