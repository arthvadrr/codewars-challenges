/*
https://www.codewars.com/kata/52685f7382004e774f0001f7/train/javascript

Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59

The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/

const humanReadable = (seconds) => {
  const strArr = [0, 0, 0];
  let minutes = 0;
  let hours = 0;
  
  while (seconds > 3599) {
    hours += 1;
    seconds -= 3600;
  }

  while (seconds > 59) {
    minutes += 1;
    seconds -= 60;
  }
  
  strArr[0] = hours;
  strArr[1] = minutes
  strArr[2] = seconds;
  
  return strArr.map(str => str < 10 ? `0${str}` : str).join(':');
}