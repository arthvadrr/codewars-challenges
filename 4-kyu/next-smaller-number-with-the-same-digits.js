/*
https://www.codewars.com/kata/5659c6d896bc135c4c00021e/train/javascript

Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

For example:

nextSmaller(21) == 12
nextSmaller(531) == 513
nextSmaller(2071) == 2017

Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

nextSmaller(9) == -1
nextSmaller(111) == -1
nextSmaller(135) == -1
nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros

    some tests will include very large numbers.
    test data only employs positive integers.

The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

*/

const nextSmaller = num => {
  const numArr = num.toString().split('')
  let a = -1
  let b = -1
  let pos_a = -1;
  let pos_b = -1;
  

  for (let i = numArr.length - 2; i > -1; --i) {
    if (numArr[i] > numArr[i + 1]) {
      pos_a = i;
      a = numArr[i];
      break;
    }
  }
 
  for (let i = pos_a + 1; i < numArr.length; i++) {
    if (numArr[i] < a && numArr[i] > b) {
      b = numArr[i];
      pos_b = i;
    }
  }
  
  [numArr[pos_a], numArr[pos_b]] = [numArr[pos_b], numArr[pos_a]];
  
  const arrSpliced = numArr
  .splice(pos_a + 1)
  .map(str => parseInt(str))
  .sort()
  .reverse()
  .map(num => num.toString());
  
  const sortedArr = numArr.concat(arrSpliced);
  
  if (pos_a === -1 || numArr[0] === '0') {
    return -1;
  }
  
  return parseInt(sortedArr.join(''));
}