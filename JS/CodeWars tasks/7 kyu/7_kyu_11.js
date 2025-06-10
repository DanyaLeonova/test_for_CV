/*
Codewars Challenge: https://www.codewars.com/kata/51f2b4448cadf20ed0000386
Difficulty: 7 kyu
Completion date: 05.2025
Description: Complete the function/method so that it returns the url with anything after the anchor (#) removed.
*/

function removeUrlAnchor(url){
  return url.replace(url.replace(/^[^#]*/gi,``), ``)
}