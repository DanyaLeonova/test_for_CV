/*
Codewars Challenge: https://www.codewars.com/kata/545a4c5a61aa4c6916000755
Difficulty: 7 kyu
Completion date: 06.2025
Description: As a part of this Kata, you need to create a function that when provided with a triplet, returns the index of the numerical element that lies between the other two elements.
The input to the function will be an array of three distinct numbers (Haskell: a tuple).
*/

function gimme (triplet) {
  return triplet.findIndex((x) => x > Math.min(...triplet) && x < Math.max(...triplet))
}