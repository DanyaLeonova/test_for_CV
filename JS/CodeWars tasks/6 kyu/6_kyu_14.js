/*
Codewars Challenge: https://www.codewars.com/kata/5552101f47fc5178b1000050
Difficulty: 6 kyu
Completion date: 05.2025
Description: Given two positive integers n and p, 
we want to find a positive integer k, if it exists, 
such that the sum of the digits of n raised to consecutive powers starting from p is equal to k * n.
*/

function digPow(n, p){
  let l = n.toString().split(``).map((x,y) => Math.pow(x, y + p)).reduce((x,y) => x + y, 0)
  return l % n === 0 ? l / n : -1
}