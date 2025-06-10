/*
Codewars Challenge: https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9
Difficulty: 7 kyu
Completion date: 05.2025
Description: Simple, given a string of words, return the length of the shortest word(s).
*/

function findShort(s){
  return s.split(` `).sort((x,y) => x.length - y.length)[0].length
}