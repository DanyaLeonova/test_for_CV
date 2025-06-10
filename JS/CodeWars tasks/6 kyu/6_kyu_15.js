/*
Codewars Challenge: https://www.codewars.com/kata/52c31f8e6605bcc646000082
Difficulty: 6 kyu
Completion date: 05.2025
Description: Given two positive integers n and p, 
we want to find a positive integer k, if it exists, 
such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
*/

function twoSum(numbers, target) {
  let numb = 0  
  for(let i = 0; i < numbers.length; i++)
      {
        numb = numbers[i]
        for(let j = i + 1; j < numbers.length; j++)
          {
            if(numb + numbers[j] === target) {
              return [i, j]
              }
          }
      }
}