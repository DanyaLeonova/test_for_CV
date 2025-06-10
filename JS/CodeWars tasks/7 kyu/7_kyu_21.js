/*
Codewars Challenge: https://www.codewars.com/kata/54c27a33fb7da0db0100040e
Difficulty: 7 kyu
Completion date: 05.2025
Description: Given an integral number, determine if it's a square number
*/

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n))
}