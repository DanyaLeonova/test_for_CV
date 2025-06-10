/*
Codewars Challenge: https://www.codewars.com/kata/559590633066759614000063
Difficulty: 7 kyu
Completion date: 05.2025
Description: Write a function that returns both the minimum and maximum number of the given list/array.
*/

function minMax(arr){
  return [Math.min(...arr),Math.max(...arr)];
}