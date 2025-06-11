/*
Codewars Challenge: https://www.codewars.com/kata/54a91a4883a7de5d7800009c
Difficulty: 5 kyu
Completion date: 05.2025
Description: Your job is to write a function which increments a string, to create a new string.
If the string already ends with a number, the number should be incremented by 1.
If the string does not end with a number. the number 1 should be appended to the new string
*/

function incrementString (s) {
  if(s.match(/[0-9]/g) !== null)
    {
      let s1 = s.slice(0, s.lastIndexOf(s.match(/\d*$/g).join(``)));
      let n = (parseInt(s.match(/\d*$/g).join(``)) + 1).toString();
      if(s.length - s1.length - n.length < 0)
        {
          return s1 + n
        }
      else
        {
          return s1 + `0`.repeat(s.length - s1.length - n.length) + n
        }
    }
  else
    {
      return s + `1`;
    }
}

console.log(incrementString(`foo123`)); // must return foo124
console.log(incrementString(`foo099`)); // must return foo100
console.log(incrementString(`foo`)) // must return foo1