/*
Codewars Challenge: https://www.codewars.com/kata/559ac78160f0be07c200005a
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Write a function that returns a string in which firstname is swapped with last name.
*/

function nameShuffler(str){
  return str.split(` `).reverse().join(` `)
}