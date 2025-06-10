/*
Codewars Challenge: https://www.codewars.com/kata/545cedaa9943f7fe7b000048
Difficulty: 6 kyu
Completion date: 06.2025
Description: Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/

function isPangram(string){
  let st = new Set();
  for(let i of string.toLowerCase())
    {
      /[a-z]/g.test(i) ? st.add(i) : ``
    }
  return st.size === 26
}