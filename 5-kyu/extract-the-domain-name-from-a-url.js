/*
https://www.codewars.com/kata/514a024011ea4fb54200004b/javascript

Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

const domainName = url => {
  const curl = url.split('')
  
  for (const l in url) {
    if (
      url[l - 2] === '/' &&
      url[l - 1] === '/'
    ) {
      curl.splice(0, l)
      break;
    }
  }
  
  for (const l in curl) {
    if (
      curl[l - 1] === '.' && 
      curl[l - 2] === "w" && 
      curl[l - 3] === "w" && 
      curl[l - 4] === "w"
    ) {
      curl.splice(0, l)
      break;
    }
  } 
  
  for (const l in curl) {
    if (curl[l] === '.') {
      curl.splice(l)
      break;
    }
  } 
  
  return curl.join('')
}