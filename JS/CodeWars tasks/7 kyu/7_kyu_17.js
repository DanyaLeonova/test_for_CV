/*
Codewars Challenge: https://www.codewars.com/kata/55f8a9c06c018a0d6e000132
Difficulty: 7 kyu
Completion date: 05.2025
Description: ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.
If the function is passed a valid PIN string, return true, else return false.
*/

function validatePIN (pin) {
  return pin.match(/^[0-9]{4}$|^[0-9]{6}$/gi) !== null
}