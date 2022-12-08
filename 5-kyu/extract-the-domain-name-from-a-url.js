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
    if (l > 8) break;
    
    if (
      url[l - 2] === '/' &&
      url[l - 1] === '/'
    ) {
      curl.splice(0, l)
      break;
    }
  }
  
  for (const l in curl) {
    if (l > 4) break;
    
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

function domainName2(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};

function domainName3(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}

console.time("mine");
console.log(domainName("http://google.com"));
console.log(domainName("http://google.co.jp"));
console.log(domainName("www.xakep.ru"));
console.log(domainName("https://youtube.com"));
console.timeEnd("mine");


console.time("bestSolution1");
console.log(domainName2("http://google.com"));
console.log(domainName2("http://google.co.jp"));
console.log(domainName2("www.xakep.ru"));
console.log(domainName2("https://youtube.com"));
console.timeEnd("bestSolution1");


console.time("bestSolution2");
console.log(domainName3("http://google.com"));
console.log(domainName3("http://google.co.jp"));
console.log(domainName3("www.xakep.ru"));
console.log(domainName3("https://youtube.com"));
console.timeEnd("bestSolution2");