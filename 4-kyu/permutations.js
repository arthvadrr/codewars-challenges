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

/*
const permutations = string => {
  const perm = string.split('');
  const length = perm.length;
  const res = [perm.join('')];
  let combo = new Array(length).fill(0);
  let a, b;
  let c = 1;


  while (c < length) {
    if (combo[c] < c) {
      a = c % 2 || combo[c];
      b = perm[c];
      perm[c] = perm[a];
      perm[a] = b;
      combo[c]++;

      c = 1;
      res.push(perm.join(''));
      continue;
    }
    
    combo[c] = 0;
    c++;
  }
  return res;
}
*/

const permutations = string => {
  const res = [string];
  const arr = string.split('');
  const len = arr.length;

  const getPerms = string => {
    let i = 1;
    let combo = Array.from({length: len}).fill(0);
    const push = (x = res.push(arr.join(''))) => 1
    const swap = (a, b) => {
      const c = arr[a];
      const d = arr[b];
      arr[a] = d;
      arr[b] = c;
      return 1;
    }
  
    while (i < len) {
      if (combo[i] < i) {
        const a = i % 2 && combo[i];
        swap(i, a);
        combo[i]++;
        i = push();
        continue;
      } else combo[i++] = 0;
    }
    return [...new Set(res)];
  }

  switch (len) {
    case 1:  return [string]
    case 2:  return [...new Set([string, string.split('').reverse().join('')])];
    default: return getPerms()
    }
}

console.log(permutations('123'))
console.log(permutations('a'), "['a']");
console.log(permutations('ab'), "['ab', 'ba']");
console.log(permutations('aabb'), "['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']");
console.log(permutations('abcd'), "['abcd', 'abdc', 'acbd','acdb','adbc','adcb','bacd','badc','bcad','bcda','bdac','bdca','cabd','cadb','cbad','cbda','cdab','cdba','dabc','dacb','dbac','dbca','dcab','dcba']");