/*
Codewars Challenge: https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1
Difficulty: 6 kyu
Completion date: 06.2025
Description: Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. 
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.
*/

function duplicateCount(text){
  let arr = {}
  for(let i of text.toLowerCase())
    {
      arr[i] ? arr[i]++ : arr[i] = 1
    }
  return Object.values(arr).filter(x => x > 1).length
}

console.log(duplicateCount(`asdasdasdasdqweqwwe1241214ewqewqeqeqew`)) // must return 9
console.log(duplicateCount(`asdasdasdasdqweqwwqzzzzewqeqeqew`)) // must return 7