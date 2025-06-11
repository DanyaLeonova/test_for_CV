/*
Codewars Challenge: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
Difficulty: 6 kyu
Completion date: 05.2025
Description: In this simple Kata your task is to create a function that turns a string into a Mexican Wave. 
You will be passed a string and you must return an array of strings where an uppercase letter is a person standing up
*/

function wave(str){
  let j = []
  for(let i = 0; i < str.length; i++)
    {
      if(str[i] != ` `)
        {
           let k = str.toLowerCase().split(``)
           k[i] = k[i].toUpperCase()
           j.push(k.join(``));
          
        }
    }
  return j
}

console.log(wave(`string`)) // must return ['String', 'sTring', 'stRing', 'strIng', 'striNg', 'strinG']
console.log(wave(`two words`)) // must return ['Two words', 'tWo words', 'twO words', 'two Words', 'two wOrds', 'two woRds', 'two worDs', 'two wordS']