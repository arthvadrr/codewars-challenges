/*
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples

"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true

Constraints

0 <= input.length <= 100
*/

const validParentheses = (p) => {
  p = p.split('');
  
  const openers = [];
  const closers = [];
  let opened = 0;
  
  if (p[0] === ')') {return false}
  
  p.forEach(str => {
      if (opened < 0) {
        return false;
      }
    
      if (str === '(') {openers.push(str); opened++;}
      if (str === ')') {closers.push(str); opened--;}
  });
  
  return openers.length === closers.length && opened === 0;
}