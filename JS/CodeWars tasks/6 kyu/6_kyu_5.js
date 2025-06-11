/*
Codewars Challenge: https://www.codewars.com/kata/556deca17c58da83c00002db
Difficulty: 6 kyu
Completion date: 06.2025
Description: Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) 
and be ready for anything else which is not clearly specified ;)
*/

function tribonacci(signature,n){
  if(n === 0)
    {
      return []
    }
  let mas = []
  while(mas.length < 3 && mas.length < n)
    {
      mas.push(signature[mas.length])
    }
  for(let i = 3; i < n; i++)
    {
      mas.push(mas[i - 3] + mas[i - 2] + mas[i - 1])
    }
  return mas
}

console.log(tribonacci([3,7,1], 14)) // must return [3, 7, 1, 11, 19, 31, 61, 111, 203, 375, 689, 1267, 2331, 4287]
console.log(tribonacci([3,1,1], 5)) // must return [3, 1, 1, 5, 7]