/*
Codewars Challenge: https://www.codewars.com/kata/57ea5b0b75ae11d1e800006c
Difficulty: 7 kyu
Completion date: 06.2025
Description: Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.
*/

function sortByLength (array) {
    return array.sort((x,y) => x.length - y.length)
}