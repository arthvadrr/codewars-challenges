/*
https://www.codewars.com/kata/52742f58faf5485cae000b9a/train/javascript

Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
fj
It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"

For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.
Detailed rules

The resulting expression is made of components like 4 seconds, 1 year, etc. In general, a positive integer and one of the valid units of time, separated by a space. The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component, which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one. Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds, but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.
*/

const formatDuration = totalSeconds => {
  if (totalSeconds === 0) return 'now';
  
  const years   = Math.floor(totalSeconds / 31536000);
  const days    = Math.floor((totalSeconds - (31536000 * years)) / 86400);
  const hours   = Math.floor((totalSeconds - (31536000 * years) - (days * 86400)) / 3600);
  const minutes = Math.floor((totalSeconds - (31536000 * years) - (days * 86400) - (hours * 3600)) / 60);
  const seconds = totalSeconds - (31536000 * years) - (days * 86400) - (hours * 3600) - (minutes * 60);
  const s = num => num > 1 ? 's' : '';

  const strArr = [
    years   ? `${years} year${s(years)}`     : '',
    days    ? `${days} day${s(days)}`       : '',
    hours   ? `${hours} hour${s(hours)}`     : '',
    minutes ? `${minutes} minute${s(minutes)}` : '',
    seconds ? `${seconds} second${s(seconds)}` : '',
  ];

  let resArr = [];
  strArr.forEach(s => {if (s !== '') resArr.push(s);})
  const len = resArr.length;

  resArr = resArr.map((s, i) => {
    if (len > 1 && i === len - 2) return `${s} and `
    if (i === len - 1) return s;
    return `${s}, `
  });

  return resArr.join('');
}

//console.log(formatDuration(31536000 + 86400 + 3600 + 10), "1 second");
// console.log(formatDuration(1), "\n|| expected: 1 second");
 console.log(formatDuration(62), "\n|| expected: 1 minute and 2 seconds");
console.log(formatDuration(120), "\n|| expected: 2 minutes");
// console.log(formatDuration(3600), "\n|| expected: 1 hour");
// console.log(formatDuration(3662), "\n|| expected: 1 hour, 1 minute and 2 seconds");
// console.log(formatDuration(3662), "\n|| expected: 1 hour, 1 minute and 2 seconds");
// // 
//year 31536000
//day  86400
//hour 3600
//min 60
