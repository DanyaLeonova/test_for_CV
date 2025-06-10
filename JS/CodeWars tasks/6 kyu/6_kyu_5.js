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