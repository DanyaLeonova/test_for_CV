/*
Codewars Challenge: https://www.codewars.com/kata/52c31f8e6605bcc646000082
Difficulty: 6 kyu
Completion date: 05.2025
Description: Write a function that takes an array of numbers (integers for the tests) and a target number.
It should find two different items in the array that, when added together, give the target value. 
The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).
*/

function twoSum(numbers, target) {
  let numb = 0  
  for(let i = 0; i < numbers.length; i++)
      {
        numb = numbers[i]
        for(let j = i + 1; j < numbers.length; j++)
          {
            if(numb + numbers[j] === target) {
              return [i, j]
              }
          }
      }
}

console.log(twoSum([1, 2, 3], 4)) // must return [0,2]
console.log(twoSum([3, 2, 4], 6)) // must return [1,2]