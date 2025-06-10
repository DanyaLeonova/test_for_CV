/*
Codewars Challenge: https://www.codewars.com/kata/5503013e34137eeeaa001648
Difficulty: 6 kyu
Completion date: 06.2025
Description: You need to return a string that looks like a diamond shape when printed on the screen, using asterisk (*) characters. 
Trailing spaces should be removed, and every line must be terminated with a newline character (\n).
Return null/nil/None/... if the input is an even number or negative, as it is not possible to print a diamond of even or negative size.
*/

function diamond(n){
  if(n < 0 || n % 2 === 0)
    {
      return null
    }
  let diam = '';
  for (let i = 0; i < n; i++) 
  {
      diam += ' '.repeat(Math.abs(Math.floor(n / 2) - i)) + '*'.repeat(n - 2 * Math.abs(Math.floor(n / 2) - i)) + '\n'
  }
  return diam
}