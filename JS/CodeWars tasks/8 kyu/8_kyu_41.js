/*
Codewars Challenge: https://www.codewars.com/kata/5772da22b89313a4d50012f7
Difficulty: 8 kyu
Completion date: 13.05.2025
Description: Create a function that gives a personalized greeting. This function takes two parameters: name and owner.
*/

function greet (name, owner) {
  return name === owner ? `Hello boss` : `Hello guest`
}