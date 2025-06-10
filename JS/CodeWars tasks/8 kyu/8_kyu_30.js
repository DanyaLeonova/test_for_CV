/*
Codewars Challenge: https://www.codewars.com/kata/56bc28ad5bdaeb48760009b0
Difficulty: 8 kyu
Completion date: 20.05.2025
Description: It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. 
You're given one parameter, the original string. You don't have to worry about strings with less than two characters.
*/

function removeChar(str){
 return str.slice(1, str.length - 1)
};