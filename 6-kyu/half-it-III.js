/*
https://www.codewars.com/kata/5716f027672b2063bb000517/train/javascript

halfIt("aabb")="ab"
halfIt("abab")="ab"
s has two "a" and two "b", so first "a" and "b" left

halfIt("aaab")=???
halfIt("abaa")=???
When number of a char is odd, like "aaa"
We can't left one and half "a", we need "round" it to 2
And we always keep chars which at leftside of s
So first "a",second "a" and a "b" left, last "a" should removed
 "aaab"-->"aab", "abaa"-->"aba"

halfIt("!!??")="!?"
It should work properly in all types of chars, not only letters

halfIt("CcCccccccCcCCcC")="CcCccccC"
It should not ignore the case, C and c are different

If s is not a string, return ""
halfIt(1)=""
halfIt([])=""
halfIt(true)=""
halfIt({})=""
halfIt(null)=""
halfIt(undefined)=""
*/

function halfIt(s){
    if (typeof s !== 'string') return ''
    
    let result = ''
    const shadow = new Set(s)
    const sto = {'total': 0}
    
    for (const letter of s) {
      if (sto[`${letter}`]) {
        sto[`${letter}`] += 1
        sto['total'] += 1
      }
      else sto[letter] = 1
    }
    
    for (const letter of shadow) {
      sto[letter] = sto[letter] / 2
    }
    
    for (const letter of s) {
      if (sto[letter] > 0) {
        result += letter
        sto[letter] -= 1
      }
    }
    
    return result
  }