/*
Codewars Challenge: https://www.codewars.com/kata/545afd0761aa4c3055001386
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Create a function that accepts a list/array and a number n, and returns a list/array of the first n elements from the list/array.
*/

function take(arr, n) {
  return arr.slice(0, n)
}