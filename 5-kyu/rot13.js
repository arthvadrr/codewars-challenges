/*
https://www.codewars.com/kata/530e15517bc88ac656000716/train/javascript

ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/

const rot13 = message => {
  let strArr = [];
  const lowerbet = 'abcdefghijklmnopqrstuvwxyz';
  const upperbet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const alignStr = pos => pos + 13 >= 26 ? (pos + 13) - 26 : pos + 13;
  
  return message.split('').map(str => {
    const alphaArr = str === str.toUpperCase() ? upperbet.split('') : lowerbet.split('');
    
    for (let i = 0; i < alphaArr.length; i++) {
      if (str === alphaArr[i]) {
        return alphaArr[alignStr(i)];
      }
    }
    return str;
  }).join('');
}