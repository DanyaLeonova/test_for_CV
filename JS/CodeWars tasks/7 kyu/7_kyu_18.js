/*
Codewars Challenge: https://www.codewars.com/kata/563b662a59afc2b5120000c6
Difficulty: 7 kyu
Completion date: 05.2025
Description: In a small town the population is p0 = 1000 at the beginning of a year. 
The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. 
How many years does the town need to see its population greater than or equal to p = 1200 inhabitants?
*/

function nbYear(p0, percent, aug, p) {
  let count = 0  
  for(let i = 0; p0 < p; i++)
      {
        p0 += Math.trunc(p0 * percent / 100) + aug;
        count++;
      }  
  return count
}