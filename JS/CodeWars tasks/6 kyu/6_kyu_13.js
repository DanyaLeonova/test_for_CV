/*
Codewars Challenge: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
Difficulty: 6 kyu
Completion date: 05.2025
Description: The goal of this exercise is to convert a string to a new string where 
each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. 
Ignore capitalization when determining if a character is a duplicate.
*/

function duplicateEncode(word){
    return word.split(``).map((x) => word.split(``).filter((a) => a.toLowerCase() === x.toLowerCase()).length > 1 ? ")" : "(").join(``);
}