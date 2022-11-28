/*
https://www.codewars.com/kata/59b81886460387d8fc000043/train/javascript

No time for stories. Reverse an array, return the result. Do whatever you want with the original array. Don't use Array.prototype.reverse.

You have 30 bytes to spare.

Example: [1, 2, 3] → [3, 2, 1]

And this time you won't be able to do the thing from that kata.

require isn't allowed as well.
*/

//code golf
reverse=a=>a.map(a.pop,[...a])