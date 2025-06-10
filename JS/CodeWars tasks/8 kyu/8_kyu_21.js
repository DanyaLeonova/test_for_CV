/*
Codewars Challenge: https://www.codewars.com/kata/586c1cf4b98de0399300001d
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Create a combat function that takes the player's current health and the amount of damage received, 
and returns the player's new health. Health can't be less than 0.
*/

function combat(health, damage) {
  return health - damage > 0 ? health - damage : 0
}