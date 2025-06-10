/*
Codewars Challenge: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
Difficulty: 5 kyu
Completion date: 05.2025
Description: Requirements:
There must be a function for each number from 0 ("zero") to 9 ("nine")
There must be a function for each of the following mathematical operations: plus, minus, times, dividedBy
Each calculation consist of exactly one operation and two numbers
The most outer function represents the left operand, the most inner function represents the right operand
Division should be integer division. For example, this should return 2, not 2.666666...:
*/

function zero(func) {
  return func ? func(0) : 0
}
function one(func) {
  return func ? func(1) : 1
}
function two(func) {
  return func ? func(2) : 2
}
function three(func) {
  return func ? func(3) : 3
}
function four(func) {
  return func ? func(4) : 4
}
function five(func) {
  return func ? func(5) : 5
}
function six(func) {
  return func ? func(6) : 6
}
function seven(func) {
  return func ? func(7) : 7
}
function eight(func) {
  return func ? func(8) : 8
}
function nine(func) {
  return func ? func(9) : 9
}

function plus(second) {
  return function (first)
  {
    return first + second
  }
}
function minus(second) {
  return function (first)
  {
    return first - second
  }
}
function times(second) {
  return function (first)
  {
    return first * second
  }
}
function dividedBy(second) {
  return function (first)
  {
    return Math.floor(first / second)
  }
}