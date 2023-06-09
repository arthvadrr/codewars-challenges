/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.

For example, for [1, 2, 2] it should return 9 because 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9.

*/


const squareSum = numbers => numbers.map(n => n*n).reduce((a, b) => a+b, 0);

console.log(squareSum([2, 4, 6, 8]));
console.log(squareSum([1, 0, 8, 9]));
console.log(squareSum([3, 2, 1, 9, 12]));
