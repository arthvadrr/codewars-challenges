/*
https://www.codewars.com/kata/52ec24228a515e620b0005ef/train/javascript

How many ways can you make the sum of a number?

From wikipedia: https://en.wikipedia.org/wiki/Partition_(number_theory)

    In number theory and combinatorics, a partition of a positive integer n, also called an integer partition, is a way of writing n as a sum of positive integers. Two sums that differ only in the order of their summands are considered the same partition. If order matters, the sum becomes a composition. For example, 4 can be partitioned in five distinct ways:

4
3 + 1
2 + 2
2 + 1 + 1
1 + 1 + 1 + 1

Examples
Basic

sum(1) // 1
sum(2) // 2  -> 1+1 , 2
sum(3) // 3 -> 1+1+1, 1+2, 3
sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3

sum(10) // 42

Explosive

sum(50) // 204226
sum(80) // 15796476
sum(100) // 190569292
*/

const sum = num => {
  const res = [Array.from({length: num + 1}).fill(1), 0];
  res[0] = 1
  for (let a = 1; a <= num; a++) {
    for (let b = a; b <= num; b++) {
      res[b] += res[b - a];
    }
  }

  return res[num];
}

console.log(num(1), '1');
console.log(num(2), '2');
console.log(num(3), '3');
console.log(sum(4), '4');
console.log(num(5), '5')