/*
Codewars Challenge: https://www.codewars.com/kata/5208f99aee097e6552000148
Difficulty: 6 kyu
Completion date: 06.2025
Description: Complete the solution so that the function will break up camel casing, using a space between words.
*/

function solution(string) {
  return string.split(``).map((x) => x.toUpperCase() === x ? ` ` + x : x).join(``)
}

console.log(solution(`asWereSaidPopMadeFromQQQQ`)) // must return as Were Said Pop Made From Q Q Q Q
console.log(solution(`asEddddddPopPPPalalla`)) // must return as Edddddd Pop P P Palalla