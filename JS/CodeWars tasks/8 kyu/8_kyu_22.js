/*
Codewars Challenge: https://www.codewars.com/kata/5808e2006b65bff35500008f
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: When provided with a letter, return its position in the alphabet.
Input :: "a"
Output :: "Position of alphabet: 1"
*/

function position(letter){
  return `Position of alphabet: ${letter.charCodeAt(0) - 96}`
}