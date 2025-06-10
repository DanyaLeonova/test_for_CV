/*
Codewars Challenge: https://www.codewars.com/kata/576757b1df89ecf5bd00073b
Difficulty: 6 kyu
Completion date: 06.2025
Description: Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.
*/

function towerBuilder(nFloors) {
  let pyr = []
  for(let i = 0; i < nFloors; i++)
    {
      let floor = ` `.repeat(nFloors - i - 1) + `*`.repeat(2 * i + 1) + ` `.repeat(nFloors - i - 1)
      pyr.push(floor)
    }
  return pyr
}