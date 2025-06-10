/*
Codewars Challenge: https://www.codewars.com/kata/58ca658cc0d6401f2700045f
Difficulty: 8 kyu
Completion date: 07.06.2025
Description: In this simple exercise, you will write a function that takes two integers; n and limit; and returns a list of the multiples of n up to and possibly including limit.
It is guaranteed that n > 0 and limit >= n.
For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.
*/

function findMultiples(integer, limit) {
  let arr = []
  for(let i = 1; i <= Math.floor(limit / integer); i++)
    {
      arr.push(integer * i)
    }
  return arr;
}