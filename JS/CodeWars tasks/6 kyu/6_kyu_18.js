/*
Codewars Challenge: https://www.codewars.com/kata/57b06f90e298a7b53d000a86
Difficulty: 6 kyu
Completion date: 05.2025
Description: input
customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
n: a positive integer, the number of checkout tills.
output
The function should return an integer, the total time required.
*/

function queueTime(customers, n) {
  let j = new Array(n).fill(0)
  for(let i of customers)
    {
      let numb = j.indexOf(Math.min(...j))
      j[numb] += i;
    }
  return Math.max(...j)
}