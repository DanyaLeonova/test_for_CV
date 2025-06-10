/*
Codewars Challenge: https://www.codewars.com/kata/583f158ea20cfcbeb400000a
Difficulty: 7 kyu
Completion date: 05.2025
Description: Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.
a and b will both be positive integers, and a will always be the first number in the operation, and b always the second.
The four operators are "add", "subtract", "divide", "multiply".
*/

function arithmetic(a, b, operator){
  const op = new Map([
    [`add`, `+`],
    [`subtract`, `-`],
    [`multiply`, `*`],
    [`divide`, `/`]
  ])
  return eval(`${a} ${op.get(operator)} ${b}`)
}