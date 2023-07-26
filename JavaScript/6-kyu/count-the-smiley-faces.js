/*
https://www.codewars.com/kata/583203e6eb35d7980400002a/train/javascript

Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D

No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
Example

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;

Note
*/

const PREcountSmileys = (arr) => {
    let count = 0;
    console.log(arr);
    arr.forEach(i => {
        const a = i.match(/(;|:)(-|~|)(\)|((D)|\[))/g) || 0;
        if (a) count += a.length;
    })
    return count;
}

/*one liner*/countSmileys = (i, r = new RegExp(/(;|:)(-|~|)(\)|((D)|\[))/g)) => i.reduce((a, b) => +r.test(b) + a, 0)

console.log(countSmileys([]))
console.log(countSmileys([':D', ':~)', ';~D', ':)']))
console.log(countSmileys([':)', ':(', ':D', ':O', ':;']))
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']))