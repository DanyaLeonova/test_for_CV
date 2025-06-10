/*
Codewars Challenge: https://www.codewars.com/kata/57a55c8b72292d057b000594
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: You need to write a function that reverses the words in a given string. Words are always separated by a single space.
As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.
*/

function reverse(string){
  return string.split(` `).reverse().join(` `)
}