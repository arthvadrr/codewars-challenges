/*
https://www.codewars.com/kata/5b883cdecc7c03c0fa00015a

You are given a string representing a website's address. To calculate the IP4 address you must convert all the characters into ASCII code, then calculate the sum of the values.

    the first part of the IP number will be the result mod 256
    the second part of the IP number will be the double of the sum mod 256
    the third will be the triple of the sum mod 256
    the fourth will be the quadruple of the sum mod 256

Input

A string representing the website address
Output

An array containing the four parts of the IP value
Examples

"www.codewars.com"  --->  [88, 176, 8, 96]
"www.starwiki.com"  --->  [110, 220, 74, 184]
*/

let f=(i,r=[...i].reduce((a,b)=>b.charCodeAt()+a,0),n=256,m=r%n)=>[m,m*2,m*3%n,r*4%n]

f=(i,r=[0,...i].reduce((a,b)=>b.charCodeAt()+a))=>[1,2,3,4].map(i=>r*i%256)

console.log(f('www.codewars.com'), [88, 176, 8, 96])
