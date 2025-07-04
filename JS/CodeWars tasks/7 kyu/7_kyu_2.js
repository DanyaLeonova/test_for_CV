/*
Codewars Challenge: https://www.codewars.com/kata/5174a4c0f2769dd8b1000003
Difficulty: 7 kyu
Completion date: 06.2025
Description: Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.
*/

function solution(nums){
    return nums ? nums.sort((a, b) => a - b) : []
}