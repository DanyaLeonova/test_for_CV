/*
Codewars Challenge: https://www.codewars.com/kata/56cd44e1aa4ac7879200010b
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Create a method to see whether the string is ALL CAPS.
*/

String.prototype.isUpperCase = function() {
  return Object.values(this).join(``).toUpperCase() === Object.values(this).join(``)
}