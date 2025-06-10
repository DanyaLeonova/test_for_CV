/*
Codewars Challenge: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
Difficulty: 7 kyu
Completion date: 05.2025
Description: This time no story, no theory. The examples below show you how to write function accum:
*/

function accum(s) {
	return s.toUpperCase().split(/(?:)/).map((x,y) => x + x.toLowerCase().repeat(y)).join(`-`)
}