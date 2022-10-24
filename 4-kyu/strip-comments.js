/*
https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

Complete the solution so that it strips all text that follows any of a set of comment markers passed in. Any whitespace at the end of the line should also be stripped out.

Example:

Given an input string of:

apples, pears # and bananas
grapes
bananas !apples

The output expected would be:

apples, pears
grapes
bananas

The code would be called like so:

var result = solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"])
// result should == "apples, pears\ngrapes\nbananas"

*/

const solution = (input, markers) => {
  const arr = input.split('\n').map(item => item.split(''))
  
  for (const marker of markers) {
    for (const a of arr) {
      for (let b = 0; b < a.length; b++) {
        if (a[b] === marker) {
          a.splice(b);
        }
      }
    }
  }
  
  const strArr = arr.map(item => {
    if (item[item.length - 1] === ' ') {
      item.pop();
    }
    
    return item.join('');
  }).join('\n');
  
  return strArr;
};