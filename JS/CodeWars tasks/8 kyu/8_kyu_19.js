/*
Codewars Challenge: https://www.codewars.com/kata/57fb09ef2b5314a8a90001ed
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
*/

function replace(s) {
    return s.replaceAll(/[aeiouAEIOU]/g,`!`);
}