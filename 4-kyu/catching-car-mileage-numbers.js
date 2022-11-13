/*
https://www.codewars.com/kata/52c4dd683bfd3b434c000292

    "7777...8?!??!", exclaimed Bob, "I missed it again! Argh!" Every time there's an interesting number coming up, he notices and then promptly forgets. Who doesn't like catching those one-off interesting mileage numbers?

Let's make it so Bob never misses another interesting number. We've hacked into his car's computer, and we have a box hooked up that reads mileage numbers. We've got a box glued to his dash that lights up yellow or green depending on whether it receives a 1 or a 2 (respectively).

It's up to you, intrepid warrior, to glue the parts together. Write the function that parses the mileage number input, and returns a 2 if the number is "interesting" (see below), a 1 if an interesting number occurs within the next two miles, or a 0 if the number is not interesting.

Note: In Haskell, we use No, Almost and Yes instead of 0, 1 and 2.
"Interesting" Numbers

Interesting numbers are 3-or-more digit numbers that meet one or more of the following criteria:

    Any digit followed by all zeros: 100, 90000
    Every digit is the same number: 1111
    The digits are sequential, incementing†: 1234
    The digits are sequential, decrementing‡: 4321
    The digits are a palindrome: 1221 or 73837
    The digits match one of the values in the awesomePhrases array

    † For incrementing sequences, 0 should come after 9, and not before 1, as in 7890.
    ‡ For decrementing sequences, 0 should come after 1, and not before 9, as in 3210.

So, you should expect these inputs and outputs:
*/

const awesomePhrase = 'Should work, dangit!';

const isInteresting = (num, phrases) => {
    let res = 0;

    const is_followed_by_all_zeros = num => {
      let res = true;
      
      const numArr = num.toString().split('')
        if (numArr.length < 3) return false;
        for (let i = 1; i < numArr.length; i++) {
          if (numArr[i] !== '0') {
            res = false;
            break;
          }
        }
      return res;
    }

    const is_all_same_num = num => {
      let res = true;
      const numArr = num.toString().split('');

      if (numArr.length < 2) return false;

      let base = numArr[0];

      numArr.forEach(n => {
        if (n !== base) res = false;
      });
      return res;
    }

    const is_sequential = num => {
      const numArr = num.toString().split('');
      const numArrInts = numArr.map(n => parseInt(n));
      if (numArrInts.length < 2) return false;
      // remove last ?.zero before checking sequence
      if (
        numArrInts[numArrInts.length - 1] === 0 &&
        numArrInts?.[numArrInts.length - 2] === 9
        ) numArrInts.pop();
        
        // Make sure array is in ascending order
      if (numArrInts[0] > numArrInts[numArrInts.length - 1]) numArrInts.reverse();

      const check_sequence = arr => {
        for (let i = 0; i < arr.length - 1; i++) {
          if (arr[i + 1] !== arr[i] + 1) return false;
        }
        return true;
      }
      
      return check_sequence(numArrInts);
    }

    const is_palindrome = num => {
      let res = false;
      const numArr = num.toString().split('');

      if (numArr.length < 2) return false;

      const first = numArr.slice(0, Math.floor(numArr.length / 2));
      const last = numArr.slice(Math.ceil(numArr.length / 2));
      first.reverse();

      if (first.join('') === last.join('')) res = true;
      return res;
    }

    const is_awesome_phrase = num => phrases.includes(num);

    const is_interesting = num => {
      if (num < 100) return false;
      if (
        is_followed_by_all_zeros(num) ||
        is_all_same_num(num) ||
        is_sequential(num) ||
        is_palindrome(num) ||
        is_awesome_phrase(num)
      ) return true;
      return false;
    }

    const is_upcoming_interesting = num => {
      if (
        is_interesting(num + 1) ||
        is_interesting(num + 2)
      ) return true;
      return false;
    }

    if (is_interesting(num)) {
      res = 2;
    } else if (is_upcoming_interesting(num)) {
      res = 1;
    }

    return res;
}

// console.log(isInteresting(1, [1337, 256]),     '0');
// console.log(isInteresting(1336, [1337, 256]),  '1');
// console.log(isInteresting(1337, [1337, 256]),  '2');
// console.log(isInteresting(11208, [1337, 256]), '0');
// console.log(isInteresting(11209, [1337, 256]), '1');
// console.log(isInteresting(11211, [1337, 256]), '2');

console.log(isInteresting(30, []), '0')