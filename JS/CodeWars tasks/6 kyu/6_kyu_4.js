/*
Codewars Challenge: https://www.codewars.com/kata/5592e3bd57b64d00f3000047
Difficulty: 6 kyu
Completion date: 06.2025
Description: Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of n3, 
the cube above will have volume of (n−1)3(n−1) 3 and so on until the top which will have a volume of 1 3 * 1 3
*/

function findNb(m) {
    let i = 1
    for(i; m > 0; i++)
      {
        m -= Math.pow(i, 3)
      }
  return m === 0 ? i - 1 : -1
}