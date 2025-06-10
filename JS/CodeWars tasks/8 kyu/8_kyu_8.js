/*
Codewars Challenge: https://www.codewars.com/kata/570a6a46455d08ff8d001002
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Numbers ending with zeros are boring.
They might be fun in your world, but not here.
Get rid of them. Only the ending ones.
*/

function noBoringZeros(n) {
  while(n % 10 === 0 && n !== 0)
    {
      n /= 10
    }
  return n
}