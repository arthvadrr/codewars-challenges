/*
https://www.codewars.com/kata/5324945e2ece5e1f32000370/train/javascript

Given the string representations of two integers, return the string representation of the sum of those integers.

For example:

sumStrings('1','2') // => '3'

A string representation of an integer will contain no characters besides the ten numerals "0" to "9".

I have removed the use of BigInteger and BigDecimal in java

Python: your solution need to work with huge numbers (about a milion digits), converting to int will not work.

*/

const sumStrings = (num1, num2) => {
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
  res = res.split('').reverse();
  while(res[0] === '0') res.shift();
  return res.join('');
}