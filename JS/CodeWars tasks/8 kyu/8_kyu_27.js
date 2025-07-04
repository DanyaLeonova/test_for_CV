/*
Codewars Challenge: https://www.codewars.com/kata/574b3b1599d8f897470018f6
Difficulty: 8 kyu
Completion date: 30.05.2025
Description: Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).
Write a function that given a floor in the american system returns the floor in the european system.
With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. 
In case of above 13, they move down by two because there are two omitted numbers below them.
Basements (negatives) stay the same as the universal level.d return "Error".
*/

function getRealFloor(n) {
  return n > 0 ? n > 12 ? n - 2 : n - 1 : n
}