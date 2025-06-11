/*
Codewars Challenge: https://www.codewars.com/kata/52efefcbcdf57161d4000091
Difficulty: 6 kyu
Completion date: 06.2025
Description: The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
  let cCount = {};
  for(let i of string)
    {
      cCount[i] ? cCount[i]++ : cCount[i] = 1
    }
  return cCount;
}

console.log(count(`aaaabdbdbdbdbdpg`)) // must return {a: 4, b: 5, d: 5, p: 1, g: 1}
console.log(count(``)) // must return {}