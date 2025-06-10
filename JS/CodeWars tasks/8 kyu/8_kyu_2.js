/*
Codewars Challenge: https://www.codewars.com/kata/5865918c6b569962950002a1
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Create a function that accepts a string and a single character, and returns an integer of the count of occurrences the 2nd argument is found in the first one.
If no occurrences can be found, a count of 0 should be returned.
*/

function strCount(str, letter){  
  return str.split(``).filter(x => x === letter).length
}