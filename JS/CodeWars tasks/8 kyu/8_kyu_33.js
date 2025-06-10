/*
Codewars Challenge: https://www.codewars.com/kata/57a083a57cb1f31db7000028
Difficulty: 8 kyu
Completion date: 19.05.2025
Description: Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).
*/

function powersOfTwo(n){
  let l = []
  for(let i = 0; i <= n; i++)
    {
      l.push(Math.pow(2, i))
    }
  return l
}