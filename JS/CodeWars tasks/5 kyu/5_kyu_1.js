/*
Codewars Challenge: https://www.codewars.com/kata/550f22f4d758534c1100025a
Difficulty: 5 kyu
Completion date: 06.2025
Description: Write a function dirReduc which will take an array of strings and returns an array of strings with the needless directions removed (W<->E or S<->N side by side).
The Haskell version takes a list of directions with data Direction = North | East | West | South.
The Clojure version returns nil when the path is reduced to nothing.
The Rust version takes a slice of enum Direction {North, East, West, South}.
The OCaml version takes a list of type direction = | North | South | East | West
*/

function dirReduc(arr){
  const directions = {
        "NORTH": "SOUTH",
        "SOUTH": "NORTH",
        "EAST": "WEST",
        "WEST": "EAST"
    }
    let reducer = []
    for (let i of arr) {
      reducer.length > 0 && reducer[reducer.length - 1] === directions[i] ? reducer.pop() : reducer.push(i)
    }
    return reducer
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); // must return ['WEST']
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "SOUTH", "WEST", "NORTH", "SOUTH", "NORTH", "NORTH", "WEST", "EAST"])); // must return ['SOUTH', 'SOUTH', 'WEST', 'NORTH', 'NORTH']