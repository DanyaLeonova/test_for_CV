/*
Codewars Challenge: https://www.codewars.com/kata/585d7d5adb20cf33cb000235
Difficulty: 6 kyu
Completion date: 06.2025
Description: There is an array with some numbers. All numbers are equal except for one. Try to find it
*/

function findUniq(arr) {
  let s = arr.filter((x) => x !== arr[0])
  let l = s.length
  return l === 1 ? s[0] : arr.filter((x) => x !== s[0])[0]
}