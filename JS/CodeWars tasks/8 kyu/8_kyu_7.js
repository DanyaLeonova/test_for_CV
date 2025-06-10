/*
Codewars Challenge: https://www.codewars.com/kata/57a0885cbb9944e24c00008e
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Write function RemoveExclamationMarks which removes all exclamation marks from a given string.
*/

function removeExclamationMarks(s) {
  return s.split(``).filter(x => x !== `!`).join(``)
}