/*
Codewars Challenge: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Given an array of integers.
Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
  let count = 0, sum = 0
  if(input && input.length > 0)
  {
    for(let i = 0; i < input.length; i++)
    {
      input[i] < 0 ? sum += input[i] : input[i] > 0 ? count++ : ``
    }
    return [count, sum]
  }
  else
    {
      return []
    }
}