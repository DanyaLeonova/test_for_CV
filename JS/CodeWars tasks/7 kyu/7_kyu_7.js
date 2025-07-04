/*
Codewars Challenge: https://www.codewars.com/kata/529eef7a9194e0cbc1000255
Difficulty: 7 kyu
Completion date: 06.2025
Description: An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).
Note: anagrams are case insensitive
Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.
*/

var isAnagram = function(test, original) {
  return test.toLowerCase().split(``).sort().join(``) === original.toLowerCase().split(``).sort().join(``)
};