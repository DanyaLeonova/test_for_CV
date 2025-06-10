/*
Codewars Challenge: https://www.codewars.com/kata/5c8bfa44b9d1192e1ebd3d15
Difficulty: 8 kyu
Completion date: 09.06.2025
Description: If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". 
Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.
*/

function warnTheSheep(queue) {
    return queue.findIndex((x) => x === `wolf`) === queue.length - 1 ? `Pls go away and stop eating my sheep` : `Oi! Sheep number ${queue.reverse().findIndex((x) => x === `wolf`)}! You are about to be eaten by a wolf!`
}