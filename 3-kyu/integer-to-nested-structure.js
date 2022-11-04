/*
https://www.codewars.com/kata/5992757ab2555777fb000067/train/javascript

We shall encode an integer in the following way:

Given positive integer n > 1. We convert it to an array as follows:

    First, create an array of all n's prime factors sorted ascending
    Then, for every element: if it is equal to 2, return an empty array. Otherwise replace the number with an array with its index in the prime numbers sequence, and then convert this number.

For example, lets convert number 46 to array. Firstly, convert it to array of its prime factors:

[2, 23]

Number 23 is 9th prime, so replace 2 with empty array and 23 with [9]. Array now becomes:

[[], [9]]

Prime factors of 9 are 3 and 3, so:

[[], [3, 3]]

Do the same for both 3:

[[], [[2], [2]]]

And finally:

[[], [[[]], [[]]]]

Now, to encode it, we simply replace each open bracket with 1 and each closing bracket with 0, then remove all ending zeros and drop one 1 from the end. This is our binary number. Using the above example:

[ ] [ [ [ ] ] [ [ ] ] ]

| | | | | | | | | | | |
| | | | | | | | | | | |
V V V V V V V V V V V V

1 0 1 1 1 0 0 1 1 0 0 0

Now simply drop the last three zeros and the last 1. The number becomes 10111001 which is 185 in decimal. That is the expected output. Notice that in array to binary conversion brackets of the main array are not included.

Your task is to write a pair of functions, encode and decode. encode should encode a number according the above procedure, and decode will return the original number given an encoded number.
*/

const getPrimePos = (n) => {
  const count = [...Array(n).keys()];

  for (let i = 2; i*i < n; i++) {
    if (count[i] !== -1) {
      for (let a = i*i; a < n; a += i) {
        count[a] = -1;
      }
    }
  }

  const primes = [];

  for (let i = 0; i < count.length; i++) {
    if (count[i] > 1) primes.push(count[i]);
  }
  
  return [primes.length + 1];
}

const getPrimes = n => {
  if (n > 1) {
    let factors = [];
    let num = n;

    for (let i = 2; i <= num; i++) {
      while(num % i === 0) {
        console.log(`i:${i}`)
        factors.push(i);
        num /= i;
      }
    }

    return factors;
  }
}
console.log(getPrimes(25))
const buildEmptyToDepth = num => {
  let arr = [];
  const p = a => [a];

  for (let i = 0; i < num; i++) arr = p(arr);

  return arr;
}

const getDepth = arr => Array.isArray(arr) ? 1 + Math.max(0, ...arr.map(getDepth)) : 0;

const isPrime = n => getPrimes(n)?.length === 1;

function encode(n) {
  let f = getPrimes(n);

  while (Math.max(...f.flat(100)) > 0) {
      f = f.map(i => {
        if (i <= 2) return [];
        let d = getDepth(i);
        
        if (isPrime(i) || isPrime(i[1])) {
          if (i[0]) {
            if(Math.max(...f.flat(100)) === 2) return i.map(a => buildEmptyToDepth(getDepth(i) - 1))
            return i.map(a => buildEmptyToDepth(getPrimePos(a) - 1));
          } else {
            return getPrimePos(i);
          }
        };

        return getPrimes(i);
      })
    }
    console.log(f)
    console.log('[[[ ]],[]]');
  f = JSON.stringify(f);
  f = f.substring(1).slice(0, -5);
  f = f.replace(/\,/g, '');
  f = f.replace(/\[/g, 1);
  f = f.replace(/\]/g, 0);
  f = parseInt(f.padStart(8, 0), 2);
  return f;
}

[[[ ]],[]]

function decode(n) {
  
}

//console.log(encode(46), 'expected 185');
//console.log(encode(3), 'expected 1');
//console.log(encode(4), 'expected 2');
//console.log(encode(5), 'expected 3');
//console.log(encode(6), 'expected 5');
//console.log(encode(7), 'expected 6');
//console.log(encode(8), 'expected 10');
console.log(encode(9), 'expected 25');
//console.log(encode(10), 'expected 11');;