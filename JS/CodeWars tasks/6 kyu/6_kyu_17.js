/*
Codewars Challenge: https://www.codewars.com/kata/546f922b54af40e1e90001da
Difficulty: 6 kyu
Completion date: 05.2025
Description: In this kata you are required to, given a string, replace every letter with its position in the alphabet.
If anything in the text isn't a letter, ignore it and don't return it.
*/

function alphabetPosition(text) {
  return text.toLowerCase().split(``).filter((x) => x.match(/[a-z]/g)).map((x) => x.charCodeAt() - 96).join(` `);
}

console.log(alphabetPosition(`asdads1`)) // must return 1 19 4 1 4 19
console.log(alphabetPosition(`asdasdsdda12xvvx sg`)) // must return 1 19 4 1 19 4 19 4 4 1 24 22 22 24 19 7