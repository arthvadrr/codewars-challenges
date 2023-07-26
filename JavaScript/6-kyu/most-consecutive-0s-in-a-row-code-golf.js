/*
https://www.codewars.com/kata/5b901127d0093853470001e7/train/javascript

Your program must find the longest sequence of consecutive zeroes in an integer number.

For example, the number 10002030000 has three sequences of zeroes with lengths 3, 1 and 4. So the longest sequence is 4.
Input :

A positive integer
Output :

The max number of consecutive zeros in that number
Restrictions :

Do it in less than 60 (59 or less) chars.
Note :

The number will always have 1 or more zeroes

*/

f=i=>`${i}`.split(/[^0]/).reduce((a,b)=>a>b?a:b).length