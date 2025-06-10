/*
Codewars Challenge: https://www.codewars.com/kata/5a6663e9fd56cb5ab800008b
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: Return their respective ages now as [humanYears,catYears,dogYears]
NOTES:
humanYears >= 1
humanYears are whole numbers only
Cat Years
15 cat years for first year
+9 cat years for second year
+4 cat years for each year after that
Dog Years
15 dog years for first year
+9 dog years for second year
+5 dog years for each year after that
*/

var humanYearsCatYearsDogYears = function(humanYears) {
  return humanYears > 2 ? [humanYears, 24 + (humanYears - 2) * 4, 24 + (humanYears - 2) * 5] :
         humanYears > 1 ? [humanYears, 24, 24] :
         [humanYears, 15, 15]   
}