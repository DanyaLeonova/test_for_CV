/*
Codewars Challenge: https://www.codewars.com/kata/54ff3102c1bad923760001f3
Difficulty: 7 kyu
Completion date: 05.2025
Description: Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
  return str.match(/[aeuio]/g) ? str.match(/[aeuio]/g).join(``).length : 0;
}