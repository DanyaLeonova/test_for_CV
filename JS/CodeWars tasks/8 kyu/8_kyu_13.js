/*
Codewars Challenge: https://www.codewars.com/kata/57ee4a67108d3fd9eb0000e7
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Write a function that takes a list of strings as an argument and returns a filtered list containing the same elements but with the 'geese' removed.
The geese are any strings in the following array, which is pre-populated in your solution:
  ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"]
*/

function gooseFilter (birds) {
  var geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  
  return birds.filter((x) => !geese.includes(x))
};