/*
Codewars Challenge: https://www.codewars.com/kata/577ff15ad648a14b780000e7
Difficulty: 8 kyu
Completion date: 19.05.2025
Description: Write a 'welcome' function that takes a parameter 'language', with a type String, and returns a greeting - if you have it in your database. 
It should default to English if the language is not in the database, or in the event of an invalid input.
*/

function greet(language) {
	const languages = new Map([
    ["english", "Welcome"],
    ["czech", "Vitejte"], 
    ["danish", "Velkomst"], 
    ["dutch", "Welkom"], 
    ["estonian", "Tere tulemast"], 
    ["finnish", "Tervetuloa"], 
    ["flemish", "Welgekomen"], 
    ["french", "Bienvenue"], 
    ["german", "Willkommen"], 
    ["irish", "Failte"], 
    ["italian", "Benvenuto"], 
    ["latvian", "Gaidits"], 
    ["lithuanian", "Laukiamas"], 
    ["polish", "Witamy"], 
    ["spanish", "Bienvenido"], 
    ["swedish", "Valkommen"], 
    ["welsh", "Croeso"]
  ])
  return languages.has(language) ? languages.get(language) : languages.get(`english`)
}