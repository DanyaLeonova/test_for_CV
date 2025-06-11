/*
Codewars Challenge: https://www.codewars.com/kata/514a024011ea4fb54200004b
Difficulty: 5 kyu
Completion date: 05.2025
Description: Write a function that when given a URL as a string, parses out just the domain name and returns it as a string
*/

function domainName(url){
  if(url.startsWith(`http`))
    {
      let l = new URL (url)
      return l.host.toString().split(`.`)[0] !== `www` ? l.host.toString().split(`.`)[0] : l.host.toString().split(`.`)[1]
    }
  else if (url)
    {
      let l = new URL (`https://${url}`)
      return l.host.toString().split(`.`)[0] !== `www` ? l.host.toString().split(`.`)[0] : l.host.toString().split(`.`)[1]
    }
  else
    {
      return url
    }
}

console.log(domainName(`http://github.com/carbonfive/raygun`)) // must return github
console.log(domainName(`http://www.zombie-bites.com`)) // must return zombie-bites
console.log(domainName(`https://www.cnet.com`)) // must return cnet
console.log(domainName(`www.rnet.com`)) // must return rnet