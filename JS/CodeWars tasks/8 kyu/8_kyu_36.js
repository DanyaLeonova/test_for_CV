/*
Codewars Challenge: https://www.codewars.com/kata/57a1fd2ce298a731b20006a4
Difficulty: 8 kyu
Completion date: 15.05.2025
Description: Write a function that checks if a given string (case insensitive) is a palindrome.
*/

function isPalindrome(x) {
  return x.toLowerCase() === x.split(``).reverse().join(``).toLowerCase()
}