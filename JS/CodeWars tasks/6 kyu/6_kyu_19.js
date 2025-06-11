/*
Codewars Challenge: https://www.codewars.com/kata/5679aa472b8f57fb8c000047
Difficulty: 6 kyu
Completion date: 05.2025
Description: Input
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.
Output
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.
*/

function findEvenIndex(arr)
{
  let count = 0;
  let numb = -1;
  for(let i = 0;i < arr.length;i++)
   {
     count === arr.slice(i+1).reduce((x,y) => x + y, 0) && numb < 0 ? numb = i : numb
     count += arr[i]
   }
  return numb
}

console.log(findEvenIndex([1,2,3,4,3,2,1])) //must return 3
console.log(findEvenIndex([1,100,50,-51,1,1])) //must return 1
console.log(findEvenIndex([20,10,-80,10,10,15,35])) //must return 0