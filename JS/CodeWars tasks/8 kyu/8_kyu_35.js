/*
Codewars Challenge: https://www.codewars.com/kata/56efc695740d30f963000557
Difficulty: 8 kyu
Completion date: 19.05.2025
Description: Define String.prototype.toAlternatingCase 
(or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) 
such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase
*/

String.prototype.toAlternatingCase = function () {
  return Object.values(this).map((x) => x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()).join(``)
}