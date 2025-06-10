/*
Codewars Challenge: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
Difficulty: 6 kyu
Completion date: 06.2025
Description: Given a string of words, you need to find the highest scoring word
*/

function high(x){
  const words = x.split(' ');
  let l = 0;
  let w = '';
    
  for (let x of words) 
  {
    let s = 0;
    for (let y of x) 
    {
      s += y.charCodeAt() - 96;
    }
    if (s > l) 
    {
      l = s;
      w = x;
    }
  }
    
    return w;
}