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
domainName("http://google.com")
domainName("https://www.5lw3f0by5yfixf7vsine198t70.br/error")
domainName("https://www.2vaoucam0qcchtbrmlh9dgt9dskc.net/")
domainName("http://vw8iq6tnethrtsin5z1sp6mt6p.tv/warez/")
domainName("http://www.9xw37a4o3utn9bbuaafthapufj5.org/archive/")
domainName("http://g-qtg5f891lgsbv7mkrh5.de")
domainName("http://www.hlpfoo0x3wkpvhfh6wsetmd3uq4-3.it/archive/")
domainName("http://www.gyv2xh8kvriazubmpfeotd603tkhla.co")
domainName("https://ds0pbfsemqskqhe.tv/")
domainName("https://45mi0wzl2tddh1ftnpkcixm.de/index.php")
domainName("8tow1z7rulw.com/users")
domainName("vymcakcmvr.it/img/")
domainName("2r26p6-eqhknis1qqiztlxkzyyakal.pro/error")
domainName("http://15xlwmll-4xh.net/")
domainName("http://sx7c826p.jp/img/")
domainName("v-8s6lg2xo7ecjn5aohjsjlctcgfb.it/error")
domainName("https://www.3n7xehko1i04mvl3yu0349sm1a44ff.us/img/")
domainName("https://www.0mj8of5jzzvsbfo2av7t6mkjyw.co.uk")
domainName("ko7p9jozemvyrlaw14ixbnfy7crp5.name/index.php")
domainName("whx3edohgp7dw-bppynqh.us/default.html")
domainName("qkir0utuhgfhkjdldbc6pveq1.tv/index.php")
domainName("https://d74jlr0og8xn1pkl.us/error")
domainName("https://gcijjovfq71j-2y3.pro/index.php")
domainName("http://9njx9dfmiiin7zx.net/index.php")
domainName("http://3sk70k6kl5k0prpr197g-e-kl02gj.fr/warez/")
domainName("http://www.6zyscxc.net/error")
domainName("http://www.3-j6dn0vt4puf03soyt2pe3.org/")
domainName("https://ckk2j1bcmevqq2guw.co/img/")
domainName("http://www.nu3sctxibvam0o6-zzzjb813ffxa.co/img/")
domainName("https://b6d0ga96pnzghgs84lirrhmp1n5.br/users")
domainName("http://p3uu2is-akas.org/img/")
domainName("6b4nh8r1h71djj3tb79m2kpm.tv/warez/")
domainName("https://www.sdvpjj23t-us0.jp")
domainName("https://z-1j88y4u27.jp/warez/")
domainName("http://www.74sricw.name/archive/")
domainName("https://www.j9nhj40bajq7.name")
domainName("http://jvesoods65l0z3j8860ey-kl5v9l.edu/users")
domainName("http://z8eckihg9il-z73ebq17njd5.pro/img/")
domainName("https://www.e7rluz2wzctublgkft4.org")
domainName("https://f-y-nm43iqssm90p.co")
domainName("q8lg3g7qm26kpnxw6.edu/users")
console.timeEnd("mine");


console.time("bestSolution1");
domainName2("http://google.com")
domainName2("https://www.5lw3f0by5yfixf7vsine198t70.br/error")
domainName2("https://www.2vaoucam0qcchtbrmlh9dgt9dskc.net/")
domainName2("http://vw8iq6tnethrtsin5z1sp6mt6p.tv/warez/")
domainName2("http://www.9xw37a4o3utn9bbuaafthapufj5.org/archive/")
domainName2("http://g-qtg5f891lgsbv7mkrh5.de")
domainName2("http://www.hlpfoo0x3wkpvhfh6wsetmd3uq4-3.it/archive/")
domainName2("http://www.gyv2xh8kvriazubmpfeotd603tkhla.co")
domainName2("https://ds0pbfsemqskqhe.tv/")
domainName2("https://45mi0wzl2tddh1ftnpkcixm.de/index.php")
domainName2("8tow1z7rulw.com/users")
domainName2("vymcakcmvr.it/img/")
domainName2("2r26p6-eqhknis1qqiztlxkzyyakal.pro/error")
domainName2("http://15xlwmll-4xh.net/")
domainName2("http://sx7c826p.jp/img/")
domainName2("v-8s6lg2xo7ecjn5aohjsjlctcgfb.it/error")
domainName2("https://www.3n7xehko1i04mvl3yu0349sm1a44ff.us/img/")
domainName2("https://www.0mj8of5jzzvsbfo2av7t6mkjyw.co.uk")
domainName2("ko7p9jozemvyrlaw14ixbnfy7crp5.name/index.php")
domainName2("whx3edohgp7dw-bppynqh.us/default.html")
domainName2("qkir0utuhgfhkjdldbc6pveq1.tv/index.php")
domainName2("https://d74jlr0og8xn1pkl.us/error")
domainName2("https://gcijjovfq71j-2y3.pro/index.php")
domainName2("http://9njx9dfmiiin7zx.net/index.php")
domainName2("http://3sk70k6kl5k0prpr197g-e-kl02gj.fr/warez/")
domainName2("http://www.6zyscxc.net/error")
domainName2("http://www.3-j6dn0vt4puf03soyt2pe3.org/")
domainName2("https://ckk2j1bcmevqq2guw.co/img/")
domainName2("http://www.nu3sctxibvam0o6-zzzjb813ffxa.co/img/")
domainName2("https://b6d0ga96pnzghgs84lirrhmp1n5.br/users")
domainName2("http://p3uu2is-akas.org/img/")
domainName2("6b4nh8r1h71djj3tb79m2kpm.tv/warez/")
domainName2("https://www.sdvpjj23t-us0.jp")
domainName2("https://z-1j88y4u27.jp/warez/")
domainName2("http://www.74sricw.name/archive/")
domainName2("https://www.j9nhj40bajq7.name")
domainName2("http://jvesoods65l0z3j8860ey-kl5v9l.edu/users")
domainName2("http://z8eckihg9il-z73ebq17njd5.pro/img/")
domainName2("https://www.e7rluz2wzctublgkft4.org")
domainName2("https://f-y-nm43iqssm90p.co")
domainName2("q8lg3g7qm26kpnxw6.edu/users")
console.timeEnd("bestSolution1");


console.time("bestSolution2");
domainName3("http://google.com")
domainName3("https://www.5lw3f0by5yfixf7vsine198t70.br/error")
domainName3("https://www.2vaoucam0qcchtbrmlh9dgt9dskc.net/")
domainName3("http://vw8iq6tnethrtsin5z1sp6mt6p.tv/warez/")
domainName3("http://www.9xw37a4o3utn9bbuaafthapufj5.org/archive/")
domainName3("http://g-qtg5f891lgsbv7mkrh5.de")
domainName3("http://www.hlpfoo0x3wkpvhfh6wsetmd3uq4-3.it/archive/")
domainName3("http://www.gyv2xh8kvriazubmpfeotd603tkhla.co")
domainName3("https://ds0pbfsemqskqhe.tv/")
domainName3("https://45mi0wzl2tddh1ftnpkcixm.de/index.php")
domainName3("8tow1z7rulw.com/users")
domainName3("vymcakcmvr.it/img/")
domainName3("2r26p6-eqhknis1qqiztlxkzyyakal.pro/error")
domainName3("http://15xlwmll-4xh.net/")
domainName3("http://sx7c826p.jp/img/")
domainName3("v-8s6lg2xo7ecjn5aohjsjlctcgfb.it/error")
domainName3("https://www.3n7xehko1i04mvl3yu0349sm1a44ff.us/img/")
domainName3("https://www.0mj8of5jzzvsbfo2av7t6mkjyw.co.uk")
domainName3("ko7p9jozemvyrlaw14ixbnfy7crp5.name/index.php")
domainName3("whx3edohgp7dw-bppynqh.us/default.html")
domainName3("qkir0utuhgfhkjdldbc6pveq1.tv/index.php")
domainName3("https://d74jlr0og8xn1pkl.us/error")
domainName3("https://gcijjovfq71j-2y3.pro/index.php")
domainName3("http://9njx9dfmiiin7zx.net/index.php")
domainName3("http://3sk70k6kl5k0prpr197g-e-kl02gj.fr/warez/")
domainName3("http://www.6zyscxc.net/error")
domainName3("http://www.3-j6dn0vt4puf03soyt2pe3.org/")
domainName3("https://ckk2j1bcmevqq2guw.co/img/")
domainName3("http://www.nu3sctxibvam0o6-zzzjb813ffxa.co/img/")
domainName3("https://b6d0ga96pnzghgs84lirrhmp1n5.br/users")
domainName3("http://p3uu2is-akas.org/img/")
domainName3("6b4nh8r1h71djj3tb79m2kpm.tv/warez/")
domainName3("https://www.sdvpjj23t-us0.jp")
domainName3("https://z-1j88y4u27.jp/warez/")
domainName3("http://www.74sricw.name/archive/")
domainName3("https://www.j9nhj40bajq7.name")
domainName3("http://jvesoods65l0z3j8860ey-kl5v9l.edu/users")
domainName3("http://z8eckihg9il-z73ebq17njd5.pro/img/")
domainName3("https://www.e7rluz2wzctublgkft4.org")
domainName3("https://f-y-nm43iqssm90p.co")
domainName3("q8lg3g7qm26kpnxw6.edu/users")
console.timeEnd("bestSolution2");