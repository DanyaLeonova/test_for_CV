/*
Codewars Challenge: https://www.codewars.com/kata/550498447451fbbd7600041c
Difficulty: 6 kyu
Completion date: 05.2025
Description: Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, 
with the same multiplicities (the multiplicity of a member is the number of times it appears). 
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order
*/

function comp(array1, array2){
  return array1 && array2 ? array1.sort((x,y) => x - y).every((x, y, array1) => x*x === array2.sort((x,y) => x - y)[y]) : false
}

console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[121, 14641, 20736, 361, 25921, 361, 20736, 361])) //must return true
console.log(comp([121, 144, 19, 161, 19, 144, 19, 11],[132, 14641, 20736, 361, 25921, 361, 20736, 361])) //must return false