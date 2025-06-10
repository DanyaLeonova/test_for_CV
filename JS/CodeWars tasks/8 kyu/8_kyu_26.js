/*
Codewars Challenge: https://www.codewars.com/kata/55a5bfaa756cfede78000026
Difficulty: 8 kyu
Completion date: 07.06.2025
Description: Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".
*/

function problem(x){
  return typeof x === `string` ? `Error` : x * 50 + 6 
}