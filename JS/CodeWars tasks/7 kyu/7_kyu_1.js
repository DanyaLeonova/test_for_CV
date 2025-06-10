/*
Codewars Challenge: https://www.codewars.com/kata/5390bac347d09b7da40006f6
Difficulty: 7 kyu
Completion date: 06.2025
Description: Your task is to convert strings to how they would be written by Jaden Smith. 
The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.
*/

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
    if(!this)
    {
     return ``
    }
    let s = this.split(` `).map(x=> x[0].toUpperCase() + x.slice(1)).join(` `)
    
    return s;
   }
  }
);