/*
Codewars Challenge: https://www.codewars.com/kata/57fae964d80daa229d000126
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.
*/

function remove (string) {
      return string.endsWith(`!`) ? string.slice(0, -1) : string
}
