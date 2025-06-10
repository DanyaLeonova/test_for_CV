/*
Codewars Challenge: https://www.codewars.com/kata/530e15517bc88ac656000716
Difficulty: 5 kyu
Completion date: 05.2025
Description: Create a function that takes a string and returns the string ciphered with Rot13. 
If there are numbers or special characters included in the string, they should be returned as they are. 
Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation"
*/

function rot13(message){
  let s = message.split(``)
  for(let i = 0; i < message.length; i++)
   {
     if(message.toLowerCase().charCodeAt(i) < 110 && message[i].match(/[a-zA-Z]/g))
       {
         s[i] = String.fromCharCode(message.charCodeAt(i) + 13)
       }
     else if(message[i].match(/[a-zA-Z]/g))
      {
        s[i] = String.fromCharCode(message.charCodeAt(i) - 13)
      }
     console.log(s) 
   }
  return s.join(``)
}