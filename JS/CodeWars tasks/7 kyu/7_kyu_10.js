/*
Codewars Challenge: https://www.codewars.com/kata/563cf89eb4747c5fb100001b
Difficulty: 7 kyu
Completion date: 05.2025
Description: Given an array of integers, remove the smallest value. Do not mutate the original array/list. 
If there are multiple elements with the same value, remove the one with the lowest index. 
If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.
*/

function removeSmallest(numbers) {
  return numbers.filter((x, y) => y != numbers.findIndex((x) => x === Math.min(...numbers)))
}