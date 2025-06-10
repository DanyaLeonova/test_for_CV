/*
Codewars Challenge: https://www.codewars.com/kata/56170e844da7c6f647000063
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Kids drink toddy.
Teens drink coke.
Young adults drink beer.
Adults drink whisky.
Make a function that receive age, and return what they drink.
Rules:
Children under 14 old.
Teens under 18 old.
Young under 21 old.
Adults have 21 or more.
*/

function peopleWithAgeDrink(old) {
  return old >= 21 ? `drink whisky` : old >= 18 ? `drink beer` : old >= 14 ? `drink coke` : `drink toddy`
};