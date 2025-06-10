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