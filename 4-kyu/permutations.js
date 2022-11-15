/*
https://www.codewars.com/kata/5254ca2719453dcc0b00027d/train/javascript

In this kata you have to create all permutations of a non empty input string and remove duplicates, if present. This means, you have to shuffle all letters from the input in all possible orders.

Examples:

* With input 'a'
* Your function should return: ['a']
* With input 'ab'
* Your function should return ['ab', 'ba']
* With input 'aabb'
* Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']

The order of the permutations doesn't matter.
*/

const permutations = string => {
  const res = [string, string.split('').reverse().join('')];
  const arr = string.split('');

  const swap = (x, y, pos1 = arr[x], pos2 = arr[y]) => {arr[x] = pos2; arr[y] = pos1}
  const shift = () => arr.push(arr.shift());
  const fullSwap = () => {
    for (let i = 0; i < arr.length - 1; i++) {
      const pos1 = i;
      const pos2 = i+1 > arr.length - 1 ? 0 : i+1;
      swap(pos1, pos2);
      res.push(arr.join(''));
    }
  }

  switch (arr.length) {
    case 1: return [string]
    case 2: return [arr.join(''), arr.reverse().join('')]
    default: {
      arr.forEach(() => {
        fullSwap(); 
        shift();
      }); 
      return [...new Set(res)];
    }
  }
}

console.log(permutations('a'), "['a']");
console.log(permutations('ab'), "['ab', 'ba']");
console.log(permutations('aabb'), "['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']");